# API Platform Documentation Parsing Check

[![Build Status](https://travis-ci.org/api-platform/api-platform-doc-parsing-check.svg?branch=master)](https://travis-ci.org/api-platform/api-platform-doc-parsing-check)
[![npm version](https://badge.fury.io/js/%40api-platform%2Fapi-platform-doc-parsing-check.svg)](https://badge.fury.io/js/%40api-platform%2Fapi-platform-doc-parsing-check)
[![MIT Licence](https://badges.frapsoft.com/os/mit/mit.svg?v=103)](https://opensource.org/licenses/mit-license.php)

Simple CLI app to check your API Platform's API documentation prior to run the frontend tools:

1. [The Client Generator Component](https://api-platform.com/docs/client-generator)
2. [The Admin Component](https://api-platform.com/docs/admin)

This tool is using the [API Doc Parser library](https://github.com/api-platform/api-doc-parser) that frontend tools depend on.

## Install

    yarn add @api-platform/api-platform-doc-parsing-check

## Usage

    node_modules/@api-platform/api-platform-doc-parsing-check/lib/index.js http://localhost:8080/

Check Result:

![Result](screen.png)
