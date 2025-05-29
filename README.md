## What is Echoes Of Time?

Echoes of Time is an on-chain, educational RPG where players become time travelers tasked with fixing historical anomalies by solving puzzles, collecting artifacts, and interacting with historical figures. The game leverages StarkNet for on-chain asset ownership, Dojo ECS for game logic, and smart contracts for progression tracking

## Development

Steps to build and run Echoes Of Time locally

### Prerequisites

**_Ensure you have the prerequisites installed before proceeding.
Check [here](https://book.dojoengine.org/getting-started#prerequisites) for guide on how to install the prerequisites._**

2. [Install Dojo](https://book.dojoengine.org/getting-started#install-dojo-using-dojoup)

```bash
# Install dojoup
curl -L https://install.dojoengine.org | bash

# Install Dojo release
dojoup --version v1.1.2
```

### Build and run StarkLudo

### Onchain

Requires 2 terminals to run

> In both terminals, ensure you are in the `onchain` directory. You can navigate into the `onchain` directory by running this command from the root directory: `cd onchain`

- Terminal 1

```bash
# Start Katana
katana --dev --dev.no-fee  --http.cors_origins "*"
```

- Terminal 2

```bash
# Build contracts
sozo build

# Deploy contracts to Katana
sozo migrate

# Run Torii with World address generated from previous command
torii --world <WORLD ADDRESS> --http.cors_origins "*"
```

To locate the world address, scan through the output generated from running `sozo migrate`, locate the line similar to:

```
⛩️  Migration successful with world at address 0x0114263853155c7f3c4209d140a05b106d9ce7f64f75058e2b3ab81fc72cc372
```

### Run contract tests

Use the following command to run the tests for StarkLudo contracts

```bash
# Navigate to the contracts directory
cd onchain

# Run tests
sozo test
```

If you want to run a specific test by the test name, use this command:

```bash
sozo test -f test_contract_deployment
```

> `test_contract_deployment` above is the name of the specific function being tested

> **_For more information about testing, check [Dojo book](https://book.dojoengine.org/framework/testing)_**


## License

This project is licensed under the MIT License. See [License](./LICENSE) for more information

## Contributing

For more info and guidance on contributing, join the contributors Telegram group: https://t.me/+nOKoMffgm2QxMDZk