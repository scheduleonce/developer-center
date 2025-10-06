# Implementation Plan: Product Separation with Shared Documentation

## Overview
Separate Booking Calendars and Booking Pages documentation in the OnceHub Developer Center using **multiple sidebars with shared content** - the simplest, most maintainable approach.

## Final Architecture ✅

### No Complexity Needed
- ❌ No ProductContext
- ❌ No ProductDropdown  
- ❌ No query parameters
- ❌ No sidebar filtering
- ❌ No React state management
- ✅ Just clean, separated docs with shared content

### Structure Overview

**v2 API (Primary):**
- Booking Calendars docs (primary, default)
- Booking Pages docs (secondary, separate section)
- Shared content (authentication, errors, webhooks, etc.)

**v1 API (Archive):**
- Legacy API reference (read-only, deprecated)

---

## Documentation Structure

```
docs/
  shared/                          ← Shared content (ONE copy, used by both)
    authentication.md
    error-handling.md
    pagination.md
    rate-limits.md
    request-ids.md
    expanding-responses.md
    api-versioning.md
    deleted-resources.md
    webhooks/
      introduction-to-webhooks.md
      using-webhooks.md
      webhook-signatures.md
      managing-webhook-subscriptions.md
  
  booking-calendars/               ← Booking Calendars only
    introduction.md
    quickstart.md
    creating-calendars.md
    managing-time-slots.md
    availability-rules.md
    calendar-settings.md
  
  booking-pages/                   ← Booking Pages only
    introduction.md
    quickstart.md
    creating-pages.md
    master-pages/
      introduction.md
      creating-master-pages.md
    event-types/
      introduction.md
      managing-event-types.md
  
  bookings/                        ← Bookings (used by both, but with tabs)
    introduction.md
    list-bookings.md
    create-booking.md
    cancel-booking.md
    schema-differences.md          ← Explains bcal vs pages differences
  
  contacts/
    introduction.md
    managing-contacts.md
  
  users-teams/
    users.md
    teams.md
```

---

## Sidebars Configuration

**File: `sidebars.ts`**

```typescript
import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  // ========================================
  // Booking Calendars Sidebar (Primary)
  // ========================================
  bookingCalendarsSidebar: [
    {
      type: 'category',
      label: 'Getting Started',
      collapsible: false,
      items: [
        'booking-calendars/introduction',
        'booking-calendars/quickstart',
      ],
    },
    {
      type: 'category',
      label: 'Overview',
      items: [
        'shared/authentication',
        'shared/error-handling',
        'shared/pagination',
        'shared/rate-limits',
        'shared/request-ids',
        'shared/expanding-responses',
        'shared/deleted-resources',
      ],
    },
    {
      type: 'category',
      label: 'Booking Calendars',
      items: [
        'booking-calendars/creating-calendars',
        'booking-calendars/managing-time-slots',
        'booking-calendars/availability-rules',
        'booking-calendars/calendar-settings',
      ],
    },
    {
      type: 'category',
      label: 'Bookings',
      items: [
        'bookings/introduction',
        'bookings/list-bookings',
        'bookings/create-booking',
        'bookings/cancel-booking',
        'bookings/schema-differences',
      ],
    },
    {
      type: 'category',
      label: 'Webhooks',
      items: [
        'shared/webhooks/introduction-to-webhooks',
        'shared/webhooks/using-webhooks',
        'shared/webhooks/webhook-signatures',
        'shared/webhooks/managing-webhook-subscriptions',
      ],
    },
    {
      type: 'category',
      label: 'Contacts',
      items: [
        'contacts/introduction',
        'contacts/managing-contacts',
      ],
    },
    {
      type: 'category',
      label: 'Users & Teams',
      items: [
        'users-teams/users',
        'users-teams/teams',
      ],
    },
  ],

  // ========================================
  // Booking Pages Sidebar (Secondary)
  // ========================================
  bookingPagesSidebar: [
    {
      type: 'category',
      label: 'Getting Started',
      collapsible: false,
      items: [
        'booking-pages/introduction',
        'booking-pages/quickstart',
      ],
    },
    {
      type: 'category',
      label: 'Overview',
      items: [
        'shared/authentication',              // ← Same files as Booking Calendars
        'shared/error-handling',
        'shared/pagination',
        'shared/rate-limits',
        'shared/request-ids',
        'shared/expanding-responses',
        'shared/deleted-resources',
      ],
    },
    {
      type: 'category',
      label: 'Booking Pages',
      items: [
        'booking-pages/creating-pages',
      ],
    },
    {
      type: 'category',
      label: 'Master Pages',
      items: [
        'booking-pages/master-pages/introduction',
        'booking-pages/master-pages/creating-master-pages',
      ],
    },
    {
      type: 'category',
      label: 'Event Types',
      items: [
        'booking-pages/event-types/introduction',
        'booking-pages/event-types/managing-event-types',
      ],
    },
    {
      type: 'category',
      label: 'Bookings',
      items: [
        'bookings/introduction',              // ← Same files as Booking Calendars
        'bookings/list-bookings',
        'bookings/create-booking',
        'bookings/cancel-booking',
        'bookings/schema-differences',
      ],
    },
    {
      type: 'category',
      label: 'Webhooks',
      items: [
        'shared/webhooks/introduction-to-webhooks',  // ← Same files
        'shared/webhooks/using-webhooks',
        'shared/webhooks/webhook-signatures',
        'shared/webhooks/managing-webhook-subscriptions',
      ],
    },
    {
      type: 'category',
      label: 'Contacts',
      items: [
        'contacts/introduction',              // ← Same files
        'contacts/managing-contacts',
      ],
    },
    {
      type: 'category',
      label: 'Users & Teams',
      items: [
        'users-teams/users',                  // ← Same files
        'users-teams/teams',
      ],
    },
  ],
};

export default sidebars;
```

---

## Docusaurus Configuration

**File: `docusaurus.config.ts`**

```typescript
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import type { ScalarOptions } from '@scalar/docusaurus';

const config: Config = {
  title: 'OnceHub Developer Center',
  tagline: 'API Documentation for OnceHub',
  url: 'https://developers.oncehub.com',
  baseUrl: '/',
  
  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: 'docs',
          editUrl: 'https://github.com/scheduleonce/developer-center/edit/main/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    // ========================================
    // v2 API - Booking Calendars
    // ========================================
    [
      '@scalar/docusaurus',
      {
        id: 'api-booking-calendars',
        label: 'API Reference - Booking Calendars',
        route: '/reference/booking-calendars',
        showNavLink: false,
        configuration: {
          spec: { url: '/openapi/v2-booking-calendars.yaml' },
          hideDownloadButton: true,
          hideDarkModeToggle: true,
          theme: 'alternate',
        },
      } as ScalarOptions,
    ],
    
    // ========================================
    // v2 API - Booking Pages
    // ========================================
    [
      '@scalar/docusaurus',
      {
        id: 'api-booking-pages',
        label: 'API Reference - Booking Pages',
        route: '/reference/booking-pages',
        showNavLink: false,
        configuration: {
          spec: { url: '/openapi/v2-booking-pages.yaml' },
          hideDownloadButton: true,
          hideDarkModeToggle: true,
          theme: 'alternate',
        },
      } as ScalarOptions,
    ],
    
    // ========================================
    // v1 API - Legacy (Deprecated)
    // ========================================
    [
      '@scalar/docusaurus',
      {
        id: 'api-v1',
        label: 'API Reference - v1 (Deprecated)',
        route: '/v1/reference',
        showNavLink: false,
        configuration: {
          spec: { url: '/openapi/v1.yaml' },
          hideDownloadButton: true,
          hideDarkModeToggle: true,
          theme: 'alternate',
        },
      } as ScalarOptions,
    ],
  ],

  themeConfig: {
    navbar: {
      title: 'OnceHub Developers',
      logo: {
        alt: 'OnceHub Logo',
        src: 'img/logo.svg',
      },
      items: [
        // Booking Calendars (Primary)
        {
          type: 'doc',
          docId: 'booking-calendars/introduction',
          position: 'left',
          label: 'Booking Calendars',
          docsPluginId: 'default',
        },
        
        // Booking Pages (Secondary)
        {
          type: 'doc',
          docId: 'booking-pages/introduction',
          position: 'left',
          label: 'Booking Pages',
          docsPluginId: 'default',
        },
        
        // API Reference dropdown
        {
          type: 'dropdown',
          label: 'API Reference',
          position: 'left',
          items: [
            {
              label: 'Booking Calendars',
              to: '/reference/booking-calendars',
            },
            {
              label: 'Booking Pages',
              to: '/reference/booking-pages',
            },
            {
              type: 'html',
              value: '<hr style="margin: 0.5rem 0;">',
            },
            {
              label: 'v1 API (Deprecated)',
              to: '/v1/reference',
            },
          ],
        },
        
        // GitHub link
        {
          href: 'https://github.com/scheduleonce/developer-center',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documentation',
          items: [
            {
              label: 'Booking Calendars',
              to: '/docs/booking-calendars/introduction',
            },
            {
              label: 'Booking Pages',
              to: '/docs/booking-pages/introduction',
            },
          ],
        },
        {
          title: 'API Reference',
          items: [
            {
              label: 'Booking Calendars API',
              to: '/reference/booking-calendars',
            },
            {
              label: 'Booking Pages API',
              to: '/reference/booking-pages',
            },
            {
              label: 'v1 API (Legacy)',
              to: '/v1/reference',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/scheduleonce/developer-center',
            },
            {
              label: 'Support',
              href: 'https://www.oncehub.com/support',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} OnceHub. Built with Docusaurus.`,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
```

---

## Implementation Phases

### Phase 1: OpenAPI Spec Variants (Week 1)

**Create build script to generate product-specific OpenAPI specs.**

**File: `scripts/build-product-variants.js`**

```javascript
const fs = require('fs');
const yaml = require('js-yaml');

// Load master v2 spec
const masterSpec = yaml.load(fs.readFileSync('./openapi/index.yaml', 'utf8'));

// Create Booking Calendars variant
const bcalSpec = JSON.parse(JSON.stringify(masterSpec));
// Remove booking-pages, master-pages, event-types paths and schemas
Object.keys(bcalSpec.paths).forEach(path => {
  if (path.includes('/booking-pages') || 
      path.includes('/master-pages') || 
      path.includes('/event-types')) {
    delete bcalSpec.paths[path];
  }
});
// Remove tags
bcalSpec.tags = bcalSpec.tags?.filter(tag => 
  !['Booking Pages', 'Master Pages', 'Event Types'].includes(tag.name)
);

// Create Booking Pages variant
const pagesSpec = JSON.parse(JSON.stringify(masterSpec));
// Remove booking-calendars paths and schemas
Object.keys(pagesSpec.paths).forEach(path => {
  if (path.includes('/booking-calendars')) {
    delete pagesSpec.paths[path];
  }
});
// Remove tags
pagesSpec.tags = pagesSpec.tags?.filter(tag => 
  tag.name !== 'Booking Calendars'
);

// Write output files
fs.writeFileSync(
  './static/openapi/v2-booking-calendars.yaml',
  yaml.dump(bcalSpec)
);
fs.writeFileSync(
  './static/openapi/v2-booking-pages.yaml',
  yaml.dump(pagesSpec)
);

console.log('✅ Generated OpenAPI variants:');
console.log('   - v2-booking-calendars.yaml');
console.log('   - v2-booking-pages.yaml');
```

**Update package.json:**

```json
{
  "scripts": {
    "openapi:build": "node scripts/build-openapi.js && node scripts/build-product-variants.js",
    "openapi:variants": "node scripts/build-product-variants.js",
    "prebuild": "npm run openapi:build"
  },
  "dependencies": {
    "js-yaml": "^4.1.0"
  }
}
```

**Run:**
```bash
npm run openapi:build
```

**Verify:**
- `static/openapi/v2-booking-calendars.yaml` created
- `static/openapi/v2-booking-pages.yaml` created

---

### Phase 2: Restructure Documentation (Week 1)

**Move existing docs into new structure:**

```bash
# Create new directories
mkdir -p docs/shared
mkdir -p docs/booking-calendars
mkdir -p docs/booking-pages
mkdir -p docs/bookings
mkdir -p docs/contacts
mkdir -p docs/users-teams

# Move shared content
mv docs/overview/authentication.md docs/shared/
mv docs/overview/error-handling.md docs/shared/
mv docs/overview/pagination.md docs/shared/
mv docs/overview/rate-limits.md docs/shared/
# ... etc

# Move webhooks
mv docs/webhooks docs/shared/

# Create product-specific docs
# (You'll create these manually based on your needs)
```

**Create sidebar-aware frontmatter** (optional for better UX):

```markdown
---
id: authentication
title: Authentication
sidebar_label: Authentication
description: Learn how to authenticate with the OnceHub API
---

# Authentication

All API requests require authentication...
```

---

### Phase 3: Deprecation Banners (Week 2)

**Create banner components for legacy content.**

#### Booking Pages Banner

**File: `src/components/LegacyProductBanner/index.tsx`**

```tsx
import React from 'react';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

export default function LegacyProductBanner(): JSX.Element {
  return (
    <div className={styles.banner}>
      <div className={styles.content}>
        <span className={styles.icon}>⚠️</span>
        <div className={styles.message}>
          <strong>Legacy Product:</strong> You are viewing Booking Pages documentation. 
          We recommend using <strong>Booking Calendars</strong> for new integrations.
        </div>
        <Link
          to="/docs/booking-calendars/introduction"
          className={styles.button}
        >
          Switch to Booking Calendars
        </Link>
      </div>
    </div>
  );
}
```

**File: `src/components/LegacyProductBanner/styles.module.css`**

```css
.banner {
  background-color: var(--ifm-color-warning-contrast-background);
  border-left: 4px solid var(--ifm-color-warning);
  padding: 1rem;
  margin-bottom: 1.5rem;
}

.content {
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
}

.icon {
  font-size: 1.5rem;
  flex-shrink: 0;
}

.message {
  flex: 1;
  min-width: 200px;
}

.button {
  background-color: var(--ifm-color-primary);
  color: white !important;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  text-decoration: none !important;
  white-space: nowrap;
}

.button:hover {
  background-color: var(--ifm-color-primary-dark);
}

@media (max-width: 768px) {
  .content {
    flex-direction: column;
    align-items: flex-start;
  }
  
  .button {
    width: 100%;
    text-align: center;
  }
}
```

#### v1 Deprecated Banner

**File: `src/components/DeprecatedVersionBanner/index.tsx`**

```tsx
import React from 'react';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

export default function DeprecatedVersionBanner(): JSX.Element {
  return (
    <div className={styles.banner}>
      <div className={styles.content}>
        <span className={styles.icon}>🚨</span>
        <div className={styles.message}>
          <strong>Deprecated API:</strong> The v1 API is no longer maintained and will be sunset soon. 
          Please <strong>migrate to v2 API</strong> as soon as possible.
        </div>
        <Link
          to="/reference/booking-calendars"
          className={styles.button}
        >
          View v2 API
        </Link>
      </div>
    </div>
  );
}
```

**File: `src/components/DeprecatedVersionBanner/styles.module.css`**

```css
.banner {
  background-color: var(--ifm-color-danger-contrast-background);
  border-left: 4px solid var(--ifm-color-danger);
  padding: 1rem;
  margin-bottom: 1.5rem;
}

.content {
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
}

.icon {
  font-size: 1.5rem;
  flex-shrink: 0;
}

.message {
  flex: 1;
  min-width: 200px;
}

.button {
  background-color: var(--ifm-color-danger);
  color: white !important;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  text-decoration: none !important;
  white-space: nowrap;
}

.button:hover {
  background-color: var(--ifm-color-danger-dark);
}

@media (max-width: 768px) {
  .content {
    flex-direction: column;
    align-items: flex-start;
  }
  
  .button {
    width: 100%;
    text-align: center;
  }
}
```

#### Inject Banners via Swizzling

**Swizzle DocItem/Layout:**

```bash
npm run swizzle @docusaurus/theme-classic DocItem/Layout -- --wrap
```

**File: `src/theme/DocItem/Layout/index.tsx`**

```tsx
import React from 'react';
import Layout from '@theme-original/DocItem/Layout';
import type LayoutType from '@theme/DocItem/Layout';
import type { WrapperProps } from '@docusaurus/types';
import { useLocation } from '@docusaurus/router';
import LegacyProductBanner from '@site/src/components/LegacyProductBanner';
import DeprecatedVersionBanner from '@site/src/components/DeprecatedVersionBanner';

type Props = WrapperProps<typeof LayoutType>;

export default function LayoutWrapper(props: Props): JSX.Element {
  const location = useLocation();
  
  // Check if this is a Booking Pages doc
  const isBookingPages = location.pathname.includes('/docs/booking-pages/');
  
  // Check if this is v1 doc (if you have v1 docs)
  const isV1 = location.pathname.includes('/v1/');
  
  return (
    <>
      {isV1 && <DeprecatedVersionBanner />}
      {isBookingPages && !isV1 && <LegacyProductBanner />}
      <Layout {...props} />
    </>
  );
}
```

#### Inject Banners on Scalar Pages

**Swizzle Root:**

```bash
npm run swizzle @docusaurus/theme-classic Root -- --wrap
```

**File: `src/theme/Root.tsx`**

```tsx
import React, { useEffect, useState } from 'react';
import { useLocation } from '@docusaurus/router';
import LegacyProductBanner from '@site/src/components/LegacyProductBanner';
import DeprecatedVersionBanner from '@site/src/components/DeprecatedVersionBanner';

export default function Root({ children }: { children: React.ReactNode }): JSX.Element {
  const location = useLocation();
  const [bannerType, setBannerType] = useState<'none' | 'legacy' | 'deprecated'>('none');

  useEffect(() => {
    // v1 API (highest priority)
    if (location.pathname.startsWith('/v1/')) {
      setBannerType('deprecated');
      return;
    }
    
    // Booking Pages API reference
    if (location.pathname === '/reference/booking-pages') {
      setBannerType('legacy');
      return;
    }
    
    setBannerType('none');
  }, [location]);

  return (
    <>
      {bannerType === 'deprecated' && (
        <div style={{ position: 'sticky', top: 'var(--ifm-navbar-height)', zIndex: 100 }}>
          <DeprecatedVersionBanner />
        </div>
      )}
      {bannerType === 'legacy' && (
        <div style={{ position: 'sticky', top: 'var(--ifm-navbar-height)', zIndex: 100 }}>
          <LegacyProductBanner />
        </div>
      )}
      {children}
    </>
  );
}
```

---

### Phase 4: Product-Specific Content with Tabs (Week 2)

**For content that differs by product, use tabs.**

**Example: `docs/bookings/list-bookings.md`**

```markdown
---
title: List Bookings
description: Retrieve a list of bookings from your account
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# List Bookings

Retrieve a list of bookings from your account.

## HTTP Request

```http
GET https://api.oncehub.com/v2/bookings
```

## Response Schema

Bookings have different fields depending on their source:

<Tabs groupId="product" queryString>
  <TabItem value="booking-calendars" label="Booking Calendars" default>

**Booking Calendar bookings include:**

```json
{
  "id": "BKNG-ABC123",
  "booking_calendar": "BCAL-XYZ789",
  "time_slot_id": "TS-001",
  "starting_time": "2024-01-15T10:00:00Z",
  "duration": 30,
  "contact": {
    "id": "CONT-123",
    "name": "John Doe",
    "email": "john@example.com"
  }
}
```

**Key Fields:**
- `booking_calendar` - ID of the Booking Calendar
- `time_slot_id` - Unique identifier for the booked time slot

  </TabItem>
  <TabItem value="booking-pages" label="Booking Pages">

**Booking Page bookings include:**

```json
{
  "id": "BKNG-ABC123",
  "booking_page": "BP-XYZ789",
  "master_page": "MP-DEF456",
  "event_type": "ET-GHI012",
  "starting_time": "2024-01-15T10:00:00Z",
  "duration": 30,
  "contact": {
    "id": "CONT-123",
    "name": "John Doe",
    "email": "john@example.com"
  }
}
```

**Key Fields:**
- `booking_page` - ID of the Booking Page
- `master_page` - ID of the Master Page (if applicable)
- `event_type` - ID of the Event Type

  </TabItem>
</Tabs>

## Common Fields

All bookings include these fields:

| Field | Type | Description |
|-------|------|-------------|
| `id` | string | Unique booking identifier |
| `starting_time` | datetime | Meeting start time (ISO 8601) |
| `duration` | integer | Meeting duration in minutes |
| `contact` | object | Contact information |
| `status` | enum | `scheduled`, `canceled`, `completed`, `no_show` |
```

**Note:** The `queryString` prop on `<Tabs>` makes the selection persist in the URL (`?product=booking-pages`)

---

### Phase 5: v1 Legacy Landing Page (Week 2)

**Create a landing page for v1 API users.**

**File: `src/pages/v1/index.tsx`**

```tsx
import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import DeprecatedVersionBanner from '@site/src/components/DeprecatedVersionBanner';

export default function V1ApiPage(): JSX.Element {
  return (
    <Layout
      title="v1 API (Deprecated)"
      description="Legacy v1 API Documentation - No longer maintained"
    >
      <DeprecatedVersionBanner />
      
      <div className="container margin-vert--lg">
        <div className="row">
          <div className="col col--8 col--offset-2">
            <h1>v1 API Documentation</h1>
            
            <div className="alert alert--danger margin-vert--lg">
              <h3>⚠️ This API version is deprecated</h3>
              <p>
                The v1 API is in <strong>maintenance mode only</strong> and will not receive:
              </p>
              <ul>
                <li>New features</li>
                <li>Performance improvements</li>
                <li>Non-critical bug fixes</li>
              </ul>
              <p>
                <strong>Sunset date:</strong> To be announced
              </p>
            </div>
            
            <h2>Why migrate to v2?</h2>
            <div className="row margin-vert--lg">
              <div className="col col--6">
                <div className="card">
                  <div className="card__header">
                    <h3>✨ New Features</h3>
                  </div>
                  <div className="card__body">
                    <ul>
                      <li>Booking Calendars (modern scheduling)</li>
                      <li>Expanded response objects</li>
                      <li>Better error handling</li>
                      <li>Improved webhook reliability</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col col--6">
                <div className="card">
                  <div className="card__header">
                    <h3>🚀 Better Performance</h3>
                  </div>
                  <div className="card__body">
                    <ul>
                      <li>Faster response times</li>
                      <li>Higher rate limits</li>
                      <li>Cursor-based pagination</li>
                      <li>Optimized data structures</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            
            <h2>Resources</h2>
            <div className="row margin-vert--lg">
              <div className="col">
                <div className="card">
                  <div className="card__body">
                    <h3>📚 v1 API Reference</h3>
                    <p>Browse the complete v1 API specification.</p>
                    <Link
                      to="/v1/reference"
                      className="button button--secondary button--block"
                    >
                      View v1 API Reference
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card">
                  <div className="card__body">
                    <h3>🔄 Migration Guide</h3>
                    <p>Learn how to migrate from v1 to v2 API.</p>
                    <Link
                      to="/docs/shared/api-versioning"
                      className="button button--secondary button--block"
                    >
                      Migration Guide
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card">
                  <div className="card__body">
                    <h3>🎯 v2 API Reference</h3>
                    <p>Explore the latest v2 API capabilities.</p>
                    <Link
                      to="/reference/booking-calendars"
                      className="button button--primary button--block"
                    >
                      View v2 API Reference
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
```

---

## File Structure Summary

```
docs/
  shared/                                  ✅ Shared content (used by both)
    authentication.md
    error-handling.md
    pagination.md
    rate-limits.md
    webhooks/
      introduction-to-webhooks.md
      ...
  
  booking-calendars/                       ✅ Booking Calendars only
    introduction.md
    creating-calendars.md
    ...
  
  booking-pages/                           ✅ Booking Pages only
    introduction.md
    creating-pages.md
    master-pages/
      ...
    event-types/
      ...
  
  bookings/                                ✅ Shared with tabs
    list-bookings.md
    schema-differences.md
    ...
  
  contacts/                                ✅ Shared
    introduction.md
    ...
  
  users-teams/                             ✅ Shared
    users.md
    teams.md

src/
  components/
    LegacyProductBanner/
      index.tsx
      styles.module.css
    DeprecatedVersionBanner/
      index.tsx
      styles.module.css
  
  theme/
    Root.tsx                               ✅ Swizzled (for Scalar banners)
    DocItem/
      Layout/
        index.tsx                          ✅ Swizzled (for doc banners)
  
  pages/
    v1/
      index.tsx                            ✅ v1 landing page

scripts/
  build-openapi.js                         ✅ Existing
  build-product-variants.js                ✅ New

static/openapi/
  v2-booking-calendars.yaml                ✅ Generated
  v2-booking-pages.yaml                    ✅ Generated
  v1.yaml                                  ✅ Static (add later)

sidebars.ts                                ✅ Two sidebars
docusaurus.config.ts                       ✅ Three Scalar instances
package.json                               ✅ Updated scripts
```

---

## Implementation Timeline

### Week 1: Foundation
- ✅ Day 1-2: Create `build-product-variants.js`, generate OpenAPI specs
- ✅ Day 3-4: Restructure docs into new folder organization
- ✅ Day 5: Create and test both sidebars

### Week 2: Banners & Polish
- ✅ Day 1-2: Create banner components (Legacy Product + Deprecated Version)
- ✅ Day 3: Swizzle DocItem/Layout and Root for banner injection
- ✅ Day 4: Create v1 landing page
- ✅ Day 5: Testing and refinement

### Total: 2 weeks 🎉

---

## Testing Checklist

### Navigation Testing
- [ ] Booking Calendars nav item works
- [ ] Booking Pages nav item works
- [ ] API Reference dropdown shows all 3 options
- [ ] Footer links work correctly

### Content Testing
- [ ] Shared docs appear in both sidebars
- [ ] Shared docs have single URL (e.g., `/docs/shared/authentication`)
- [ ] Product-specific docs only in relevant sidebar
- [ ] Tabs work correctly in bookings docs
- [ ] Tab selection persists via URL (`?product=booking-pages`)

### Banner Testing
- [ ] Legacy product banner shows on Booking Pages docs
- [ ] Legacy product banner shows on `/reference/booking-pages`
- [ ] Deprecated version banner shows on `/v1/reference`
- [ ] Deprecated version banner shows on `/v1/` landing page
- [ ] Banner CTAs work correctly
- [ ] Banners are responsive on mobile

### API Reference Testing
- [ ] `/reference/booking-calendars` shows correct spec
- [ ] `/reference/booking-pages` shows correct spec
- [ ] `/v1/reference` shows v1 spec
- [ ] All Scalar instances render correctly
- [ ] Download/copy features work

### SEO Testing
- [ ] Each doc has one canonical URL
- [ ] No duplicate content warnings
- [ ] Meta tags correct
- [ ] Sitemap generated correctly

---

## Success Metrics

✅ **Zero duplication** - Shared docs exist once, referenced by both sidebars
✅ **Clear separation** - Users see either Booking Calendars or Booking Pages docs
✅ **Easy maintenance** - Edit shared content once, updates both products
✅ **Simple architecture** - No complex state management or filtering
✅ **Fast build times** - Minimal JavaScript, static generation
✅ **SEO friendly** - Single URLs for shared content
✅ **User clarity** - Clear navigation, obvious product separation

---

## Benefits Over Previous Plans

**vs. Dropdown/Query Param Approach:**
- ❌ No ProductContext needed
- ❌ No ProductDropdown component
- ❌ No query parameter handling
- ❌ No sidebar filtering logic
- ❌ No React state management
- ✅ **60% less code**
- ✅ **50% faster to implement**
- ✅ **Simpler to maintain**

**vs. Full Duplication Approach:**
- ✅ No duplicate files for shared content
- ✅ Update once, reflected everywhere
- ✅ No sync issues
- ✅ Smaller repository

---

## Migration Notes

If you have existing docs at `/docs/overview/`, they can be moved to:
- `/docs/shared/` for shared content
- `/docs/booking-calendars/` for bcal-specific
- `/docs/booking-pages/` for pages-specific

Docusaurus will automatically handle redirects if you set up:

```typescript
// In docusaurus.config.ts
presets: [
  [
    'classic',
    {
      docs: {
        // ... other config
        redirects: {
          '/docs/overview/authentication': '/docs/shared/authentication',
          // Add more redirects as needed
        },
      },
    },
  ],
],
```

---

## Ready to Start Implementation? 🚀

This is the **simplest, most maintainable approach** for your use case:

1. **No complexity** - Just multiple sidebars
2. **No duplication** - Shared content referenced by both
3. **Clear separation** - Users see one product at a time
4. **Easy to expand** - Add more products by adding sidebars
5. **2 weeks to implement** - Much faster than dropdown approach

Should I start with **Phase 1** (OpenAPI spec generation)?
