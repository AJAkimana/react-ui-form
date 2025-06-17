# React MUI Form Library

A flexible, reusable form component library for React, built on top of [Material-UI (MUI)](https://mui.com/) components. Define your forms using a simple JSON schema and render fully controlled, accessible forms with minimal boilerplate.

## Features

- **Declarative JSON Schema**: Define form fields, types, and layout in a JSON structure.
- **MUI Integration**: Uses MUI components for consistent, accessible UI.
- **Controlled Inputs**: All fields are fully controlled via React state.
- **Field Types**: Supports text, password, date, and switch fields out of the box.
- **Customizable**: Easily extend or style via MUI’s theming and your own components.

## Usage

```tsx
import { MFForm, MFFormField } from './src/components/MFForm';

const fields: MFFormField[][] = [
  [
    { name: 'username', label: 'Username', fieldType: 'text-field' },
    { name: 'password', label: 'Password', fieldType: 'password' },
  ],
  [
    { name: 'birthdate', label: 'Birthdate', fieldType: 'date' },
    { name: 'subscribe', label: 'Subscribe', fieldType: 'switch-field', isBool: true },
  ],
];

const [formState, setFormState] = useState({});

<MFForm fields={fields} states={formState} setStates={setFormState} />;
```

## JSON Schema Example

Each field is defined as an object:

```ts
{
  name: string;           // Field key in state
  label?: string;         // Field label
  value?: string|boolean; // Initial value
  fieldType?: 'text-field' | 'password' | 'date' | 'switch-field';
  isBool?: boolean;       // For switch fields
  hide?: boolean;         // Hide field
  // ...other MUI props
}
```

Fields are grouped in rows (arrays of arrays) for layout.

## Components

- [`MFForm`](src/components/MFForm/index.tsx): Main form renderer.
- [`MFInput`](src/components/MFForm/MFInput.tsx): Text and select input.
- [`MFPassword`](src/components/MFForm/MFPassword.tsx): Password input.
- [`MFDateInput`](src/components/MFForm/MFDateInput.tsx): Date picker.
- [`MFSwitch`](src/components/MFForm/MFSwitch.tsx): Switch/toggle input.

## Styling

Customize via the [`styles`](src/components/MFForm/styles.ts) object or override MUI theme as needed.

---

See [src/components/MFForm/index.tsx](src/components/MFForm/index.tsx) for the main