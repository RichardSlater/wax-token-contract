## WAX Token Contract (Dockerised)

This is a basic WAX token contract with added burn functionality.

### Development

Use the `waxcdt` container for development:

**Windows**:
```
docker run --env PRV_KEY={{PRIVATE_KEY}} --env ACCOUNT={{ACCOUNT}} -it --name waxcdt -v C:\source\wax:/wax waxteam/cdt bash
```
**Mac/Linux**:
```
docker run --env PRV_KEY={{PRIVATE_KEY}} --env ACCOUNT={{ACCOUNT}} -it --name waxcdt -v /source/wax:/wax waxteam/cdt bash
```

| Parameter   | Description                                                        | Required |
|-------------|--------------------------------------------------------------------|----------|
| PRIVATE_KEY | A valid `active` private key for the account hosting the contract. | Yes      |
| ACCOUNT     | The account to deploy the contract to                              | Yes      |

### Build and Deployment

Use the `Dockerfile` to deploy quickly:

#### One-time Build Options

```
cd .\token-contract\
docker build -t token-contract .
```

#### Build / Deploy Loop

```
docker run --env PRV_KEY={{PRIVATE_KEY}} --env ACCOUNT={{ACCOUNT}} --env ENDPOINT=https://testnet.waxsweden.org -it --name token-contract -v C:\source\wax:/wax token-contract
```

| Parameter   | Description                                                        | Required |
|-------------|--------------------------------------------------------------------|----------|
| PRIVATE_KEY | A valid `active` private key for the account hosting the contract. | Yes      |
| ACCOUNT     | The account to deploy the contract to                              | Yes      |