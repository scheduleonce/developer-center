---
sidebar_position: 7
title: API Versioning
description: Understand OnceHub API versioning strategy, how to specify versions in requests, and manage backward compatibility.
---

# Versioning

When updates are made to our API that are not compatible with the previous version, a new version is released.

The most recent version is **v2.0.0** and it is the default one to use when starting a new integration.

To view previous versions of the API that are still supported, simply toggle to another version here in the API reference documentation.

## Version History

:::info Current Version

**v2.0.0** is the current and recommended version for all new integrations. This version includes the latest features and improvements.

:::

## Backward Compatibility

When breaking changes are necessary, we release a new API version to ensure existing integrations continue to work without interruption. Previous versions remain supported to give you time to migrate at your own pace.

:::tip Migration Advice

When planning to migrate to a newer API version, we recommend:

1. Review the changelog for breaking changes
2. Test your integration thoroughly in a development environment
3. Update your API calls gradually
4. Monitor your integration after migration

:::
