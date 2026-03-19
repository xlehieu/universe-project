# Planet Project

LEARNING NESTJS

=> tạo project

```bash
nest new planet-project
```

=> chuyển thành apps và thêm planet-project-api-gateway

```bash
nest g app planet-project-api-gateway
nest g app planet
nest g app users
```

==> Add a users module to the gateway application

```bash
nest g module users --project planet-project-api-gateway
```

==> Add a users serivce to the gateway application

```bash
nest g service users --project planet-project-api-gateway
```

==> Add a users controller to the gateway application

```bash
nest g controller users --project planet-project-api-gateway
```

==> Add a resource to to the gateway application

```bash
nest g resource planet --project planet-project-api-gateway
```
