# ESP3D-WEBUI UI Customization Guide

## 🎯 Overview

The `dist/Printer3D/Marlin/index.html.gz` file is a **compressed, built output** - you cannot edit it directly. Instead, you need to modify the source files and rebuild the project.

## 📁 Project Structure

```
ESP3D-WEBUI-3.0/
├── src/                      # Source files (EDIT THESE)
│   ├── components/          # React/Preact components
│   ├── style/              # SASS/CSS styling files
│   ├── pages/              # Page components
│   ├── tabs/               # Tab components
│   ├── targets/            # Target-specific configurations
│   └── index.js            # Entry point
├── dist/                    # Built output (DO NOT EDIT)
│   └── Printer3D/
│       └── Marlin/
│           └── index.html.gz  # Your compressed file
└── config/                  # Build configuration
```

## 🎨 How to Change the UI

### 1️⃣ **Change Colors & Theme**

Edit: `src/style/_variables.scss`

```scss
// Change primary color (buttons, links, etc.)
$primary-color: #5755d9 !default;  // Change this to your color

// Change background colors
$bg-color: lighten($dark-color, 75%) !default;
$body-bg: $bg-color-light !default;

// Change success/warning/error colors
$success-color: #32b643 !default;
$warning-color: #ffb700 !default;
$error-color: #ff0000 !default;
```

**Example - Make it blue themed:**
```scss
$primary-color: #007bff !default;
$success-color: #28a745 !default;
```

### 2️⃣ **Change Fonts**

Edit: `src/style/_variables.scss`

```scss
// Change font family
$base-font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto !default;

// Change font sizes
$html-font-size: 20px !default;
$font-size: 0.8rem !default;
$font-size-sm: 0.7rem !default;
$font-size-lg: 0.9rem !default;
```

**Example - Use custom Google Font:**
```scss
// First, add to src/index.html:
// <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet">

// Then in _variables.scss:
$base-font-family: 'Inter', -apple-system, system-ui, sans-serif !default;
```

### 3️⃣ **Change Layout & Spacing**

Edit: `src/style/_variables.scss`

```scss
// Adjust spacing
$layout-spacing: $unit-2 !default;      // 0.4rem
$layout-spacing-sm: $unit-1 !default;   // 0.2rem
$layout-spacing-lg: $unit-4 !default;   // 0.8rem

// Adjust border radius (roundness)
$border-radius: $unit-1 !default;  // Increase for rounder corners
```

### 4️⃣ **Modify Component Styles**

Edit files in: `src/style/components/`

Create custom component styles or override existing ones.

**Example - Create custom button style:**

Create: `src/style/components/_custom.scss`

```scss
.btn-custom {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 8px;
  transition: transform 0.2s;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
  }
}
```

Then import it in `src/style/index.scss`:
```scss
@import "components/custom";
```

### 5️⃣ **Modify Component Structure**

Edit Preact components in: `src/components/`

**Example locations:**
- `src/components/Navbar/` - Top navigation bar
- `src/components/TabBar/` - Tab navigation
- `src/components/Controls/` - UI controls (buttons, inputs, etc.)
- `src/components/Panels/` - Panel components

**Example - Modify a component:**

```javascript
// src/components/Navbar/index.js
import { h } from "preact"

const Navbar = () => {
  return (
    <nav className="navbar custom-navbar">
      <div className="navbar-section">
        <h1>My Custom ESP3D UI</h1>
      </div>
    </nav>
  )
}

export { Navbar }
```

### 6️⃣ **Add Custom CSS**

Create: `src/style/components/_custom-overrides.scss`

```scss
// Custom styles that override defaults
.container {
  max-width: 1400px;  // Wider container
}

// Custom card style
.card {
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  border-radius: 12px;
  
  &:hover {
    box-shadow: 0 4px 16px rgba(0,0,0,0.15);
  }
}

// Custom dark theme
body.dark-theme {
  background: #1a1a1a;
  color: #ffffff;
  
  .card {
    background: #2d2d2d;
    border-color: #404040;
  }
}
```

## 🔨 Building the Project

### **Setup (First Time Only)**

1. Install Node.js (v20.8.0 recommended)
2. Open terminal in project root
3. Run:
```bash
npm install
```

### **Development Mode (Live Preview)**

For Marlin 3D Printer:
```bash
npm run dev-printer-marlin
```

This will:
- Start a development server at `http://localhost:8088`
- Auto-reload when you make changes
- Show changes in real-time

Other targets:
```bash
npm run dev-printer-repetier
npm run dev-printer-smoothieware
npm run dev-cnc-grbl
npm run dev-cnc-grblhal
npm run dev-sand-grbl
```

### **Production Build**

Build for Marlin:
```bash
npm run printer-marlin
```

This creates: `dist/Printer3D/Marlin/index.html.gz`

Build all targets:
```bash
npm run buildall
```

## 🎯 Common Customization Examples

### Example 1: Modern Dark Theme

**Edit `src/style/_variables.scss`:**
```scss
$dark-color: #1a1a2e !default;
$primary-color: #0f3460 !default;
$secondary-color: #16213e !default;
$bg-color: #0f0f0f !default;
$body-bg: #1a1a2e !default;
$body-font-color: #eaeaea !default;
```

### Example 2: Larger, More Readable Text

**Edit `src/style/_variables.scss`:**
```scss
$html-font-size: 24px !default;  // Increased from 20px
$font-size: 1rem !default;       // Increased from 0.8rem
$font-size-lg: 1.2rem !default;  // Increased from 0.9rem
```

### Example 3: Rounded Modern UI

**Edit `src/style/_variables.scss`:**
```scss
$border-radius: 0.8rem !default;  // Much rounder (was 0.2rem)
```

**Add to custom CSS:**
```scss
.btn, .card, .panel, input, select {
  border-radius: 0.8rem;
}
```

### Example 4: Custom Color Scheme

**Create `src/style/_custom-theme.scss`:**
```scss
// Ocean Blue Theme
$primary-color: #006994;
$primary-color-dark: #004d6d;
$primary-color-light: #0088c2;
$success-color: #00a878;
$warning-color: #ff8c42;
$error-color: #e63946;
$bg-color: #f0f4f8;
$body-font-color: #2d3748;
```

**Import in `src/style/index.scss`:**
```scss
@import "custom-theme";
@import "variables";
// ... rest of imports
```

## 🚀 Quick Start Workflow

1. **Make changes** to source files in `src/`
2. **Run dev server**: `npm run dev-printer-marlin`
3. **View at**: `http://localhost:8088`
4. **See changes** automatically reload
5. **When satisfied**, build production: `npm run printer-marlin`
6. **Upload** `dist/Printer3D/Marlin/index.html.gz` to your device

## 📝 Important Notes

- ✅ **DO** edit files in `src/` directory
- ❌ **DON'T** edit files in `dist/` directory (they get overwritten)
- 🔄 Always rebuild after making changes
- 💾 Test in development mode before building production
- 📱 The UI is responsive - test on different screen sizes

## 🎨 Advanced: Complete UI Overhaul

For a complete redesign:

1. **Create new theme file**: `src/style/_my-theme.scss`
2. **Override all variables** you want to change
3. **Create custom components** in `src/components/`
4. **Add custom styles** in `src/style/components/`
5. **Modify layout** in `src/areas/` and `src/pages/`
6. **Test thoroughly** in dev mode
7. **Build** for production

## 🔍 Finding What to Edit

**To find where a UI element is defined:**

1. **Inspect element** in browser (F12)
2. **Look at class names** (e.g., `navbar`, `btn-primary`)
3. **Search in project**:
   - For styles: Search in `src/style/`
   - For components: Search in `src/components/`
4. **Edit the file** you found
5. **See changes** in dev server

## 📚 Resources

- **Preact Documentation**: https://preactjs.com/
- **Spectre.css Documentation**: https://picturepan2.github.io/spectre/
- **SASS Documentation**: https://sass-lang.com/documentation

## ❓ Need Help?

- Check ESP3D Discord: https://discord.gg/Z4ujTwE
- Visit ESP3D website: https://esp3d.io
- GitHub Issues: https://github.com/luc-github/ESP3D-WEBUI/issues

---

**Happy Customizing! 🎨**
