# nestjs-microservices-demo

## Development

### Startup

```bash
docker compose up --detach
```

### Gateway

```bash
docker compose exec gateway-service npm install
docker compose exec gateway-service npm run start:dev
```

### Posts

```bash
docker compose exec posts-service npm install
docker compose exec posts-service npm run start:dev
```

### Shutdown

```bash
docker compose down --remove-orphans --volumes --timeout 0
```

## Build & Push

```bash
docker compose -f docker-compose.build.yaml build
docker compose -f docker-compose.build.yaml push
```

## Deployment

```bash
docker swarm init --advertise-addr 127.0.0.1
docker stack deploy -c docker-compose.stack.yaml app
```

## Endpoints

Method | Path | Data | Description
---|---|---|---
`GET` | `/posts` | None | Get all posts
`POST` | `/posts` | {"title": "title", "body": "body"} |  Create a post
`DELETE` | `/posts/:id` | None  |  Create a post
