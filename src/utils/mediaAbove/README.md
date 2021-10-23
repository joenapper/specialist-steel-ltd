# Media Above

A function to apply styles above a predefined breakpoint.

## Parameters

| Name                       | Required | Type                                                                   | Description                                            |
| -------------------------- | -------- | ---------------------------------------------------------------------- | ------------------------------------------------------ |
| Property 1                 | Yes      | `'mobile' \| 'mobileLarge' \| 'tablet' \| 'desktop' \| 'desktopLarge'` | A property on the util to define the target breakpoint |
| Styles (arg on property 1) | Yes      | `string`                                                               | A CSS block to apply above the breakpoint              |

## Example

```js
import styled from "styled-components";
import { mediaAbove } from "@oodle/ui-library/utils";

const Foo = styled.div`
  ${mediaAbove.mobile(css`
    display: block;
  `)}
`;
```
