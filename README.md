# API Platform Documentation Parsing Check

[![GitHub Actions](https://github.com/api-platform/api-platform-doc-parsing-check/workflows/CI/badge.svg?branch=main)](https://github.com/api-platform/api-platform-doc-parsing-check/actions?query=workflow%3ACI+branch%3Amain)
[![npm version](https://badge.fury.io/js/%40api-platform%2Fapi-platform-doc-parsing-check.svg)](https://badge.fury.io/js/%40api-platform%2Fapi-platform-doc-parsing-check)

Simple CLI app to check your API Platform's API documentation prior to run the frontend tools:

1. [Create Client](https://api-platform.com/docs/create-client)
2. [Admin](https://api-platform.com/docs/admin)

This tool is using the [API Doc Parser library](https://github.com/api-platform/api-doc-parser) that frontend tools depend on.

## Install

    npm install @api-platform/api-platform-doc-parsing-check

## Usage

```console
# Hydra
node_modules/@api-platform/api-platform-doc-parsing-check/lib/index.js http://localhost:8080/

# OpenAPI 3
node_modules/@api-platform/api-platform-doc-parsing-check/lib/index.js -f openapi3 http://localhost:8080/docs.json
```

Check Result:

![Result](screen.png)
