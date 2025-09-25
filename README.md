# Studio

Studio is a [Tailwind Plus](https://tailwindcss.com/plus) site template built using [Tailwind CSS](https://tailwindcss.com) and [Next.js](https://nextjs.org).

## Getting started

To get started with this template, first install the npm dependencies:

```bash
npm install
```

Next, run the development server:

```bash
npm run dev
```

Finally, open [http://localhost:3000](http://localhost:3000) in your browser to view the website.

## Development Workflow

This project includes comprehensive quality checks to ensure code quality and consistency:

### Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the project for production
- `npm run start` - Start the production server
- `npm run lint` - Run ESLint to check for code issues
- `npm run lint:fix` - Automatically fix ESLint issues
- `npm run type-check` - Run TypeScript type checking
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check if code is properly formatted
- `npm run quality-check` - Run all quality checks (type-check, lint, format-check, build)
- `npm run pre-push` - Alias for quality-check (used by git hooks)

### Pre-push Hook

A git pre-push hook is automatically set up to run quality checks before any push. This ensures:

- ✅ TypeScript type checking passes
- ✅ ESLint finds no issues
- ✅ Code is properly formatted with Prettier
- ✅ The project builds successfully

If any check fails, the push will be blocked until issues are resolved.

### Manual Quality Checks

You can run the complete quality check manually:

```bash
npm run quality-check
```

This will run all checks in sequence and stop at the first failure.

## Customizing

You can start editing this template by modifying the files in the `/src` folder. The site will auto-update as you edit these files.

## License

This site template is a commercial product and is licensed under the [Tailwind Plus license](https://tailwindcss.com/plus/license).

## Learn more

To learn more about the technologies used in this site template, see the following resources:

- [Tailwind CSS](https://tailwindcss.com/docs) - the official Tailwind CSS documentation
- [Next.js](https://nextjs.org/docs) - the official Next.js documentation
- [Framer Motion](https://www.framer.com/docs/) - the official Framer Motion documentation
- [MDX](https://mdxjs.com/) - the official MDX documentation
