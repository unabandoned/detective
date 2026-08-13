# detective Change Log
All notable changes to this project will be documented in this file.
This project adheres to [Semantic Versioning](http://semver.org/).

## x.y.z - unreleased
* update acorn-node to 1.8.2 (make use of acorn 7.x)

## [5.2.2](https://github.com/unabandoned/detective/compare/detective-v5.2.1...detective-v5.2.2) (2026-08-13)


### Bug Fixes

* **package:** acorn-node@1.8.2 ([#84](https://github.com/unabandoned/detective/issues/84)) ([199edf5](https://github.com/unabandoned/detective/commit/199edf59d2e406f28dd2f864422457daca7240b9))


### Dependencies & maintenance

* add new versions ([8a0b1c3](https://github.com/unabandoned/detective/commit/8a0b1c30495c0b8e71b25e532f94c11174c7dcd1))
* add ubuntu workflows ([423fa32](https://github.com/unabandoned/detective/commit/423fa322df79f6630172d5c8ff94e6c9e8251fe1))
* drop Tidelift from the security policy ([#4](https://github.com/unabandoned/detective/issues/4)) ([b921220](https://github.com/unabandoned/detective/commit/b921220ff444386f6931a4a5caa118ecb33cdcd1))
* tap → tape ([0228855](https://github.com/unabandoned/detective/commit/0228855ba4dbd557fb1682894f7b15c632d68f2e))
* use ljharb's Github Actions test workflow ([51d5e1a](https://github.com/unabandoned/detective/commit/51d5e1af8f7fd14629197b63fd0c55e54c67f12d))
* use ljharb's Github Actions test workflow ([e095844](https://github.com/unabandoned/detective/commit/e095844817dd6181da82be85442a091caba4627a))

## 5.2.1 - 2022-05-27
* Update to "minimist": "^1.2.6" from "^1.1.1" to quiet down dependabot security theater.

## 5.2.0 - 2019-01-28
* Use acorn-node's option defaults, adds support for new ES features (https://github.com/browserify/detective/pull/81)

## 5.1.0 - 2018-02-28
* Use acorn-node parser, which matches latest Node syntax support (https://github.com/browserify/detective/pull/78)
* Add basic cli: `detective index.js` outputs dependency names (https://github.com/browserify/detective/pull/51)

## 5.0.2 - 2018-01-06
* Extend support back to 0.8 until we can determine a LTS plan.

## 5.0.1 - 2018-01-02
* Add engines field set to `>=4.0.0`.

## 5.0.0 - 2018-01-02
* Fix: Don't crash on files with the spread operator (https://github.com/browserify/detective/pull/75)
* Breaking: Drop support for node 0.12 (https://github.com/browserify/detective/pull/75)
