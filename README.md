# `svh`

Welcome to my Street Vendor Helper project built on the Internet Computer framework. 

Street Vendor Helpr is an App that helps Street Vendors find vending opportunities in the local area. They can also rate the events to help other vendors and help organizers improve events.

If you want to run this project, you might want to try the following commands:

```bash
cd svh/
dfx help
dfx canister --help
```

## Running the project locally

If you want to test this project locally, you can use the following commands:

```bash
# Starts the replica, running in the background
dfx start --background

# Deploys the canisters to the replica and generates a candid interface
dfx deploy
```

Once the job completes, this application will be available at `http://localhost:4943?canisterId={asset_canister_id}`.

If you have made changes to the backend canister, you can generate a new candid interface with

```bash
npm run generate
```

at any time. This is recommended before starting the frontend development server, and will be run automatically any time you run `dfx deploy`.

If you are making frontend changes, you can start a development server with

```bash
npm start
```

Which will start a server at `http://localhost:8080`, proxying API requests to the replica at port 4943.

## Helpful links
- [Quick Start](https://internetcomputer.org/docs/current/developer-docs/setup/deploy-locally)
- [SDK Developer Tools](https://internetcomputer.org/docs/current/developer-docs/setup/install)
- [Motoko Programming Language Guide](https://internetcomputer.org/docs/current/motoko/main/motoko)
- [Motoko Language Quick Reference](https://internetcomputer.org/docs/current/motoko/main/language-manual)
