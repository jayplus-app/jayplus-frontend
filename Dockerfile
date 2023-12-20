FROM node:latest as dependencies
WORKDIR /jayplus-frontend
COPY package.json ./
RUN npm install

FROM node:latest as builder
ARG NEXT_PUBLIC_API_URL
ARG NEXT_PUBLIC_STRIPE_PUBLIC_KEY
WORKDIR /jayplus-frontend
COPY . .
COPY --from=dependencies /jayplus-frontend/node_modules ./node_modules
RUN npm run build

FROM node:latest as runner
WORKDIR /jayplus-frontend
ENV NODE_ENV production
COPY --from=builder /jayplus-frontend/.next ./.next
COPY --from=builder /jayplus-frontend/node_modules ./node_modules
COPY --from=builder /jayplus-frontend/package.json ./package.json

CMD [ "npm", "start" ]