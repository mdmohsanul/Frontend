# Code Hygiene assurred that our code is maintainable, redable and scalable

1. Proper folder structure, either using React or Next.js try to keep all your code inside src folder
src/
  components/
  pages/
  layout/
  hooks/
  utils/
  constants/
  services/
  types/

2. Clear and meaningful names

3. Proper import order

- Core libraries
- Third-party libraries
- Internal modules (components, hooks, types)
- Assets and styles 

4. Avoid using inline styling - use reusable classes

5. Always be sure that your component should not exceed 150 lines, if exceed then split it.

6. Try to keep UI Layer and Logic separately

7. Minimize Re-renders

- use React.memo()
- useMemo and useCallback
- Avoid passing inline functions as props

❌ <LargeList items={data.map(item => process(item))} />

✅ const processedItems = useMemo(() => data.map(process), [data]);
<LargeList items={processedItems} />

8. Prop-Driven - not hard coded

❌ <User name="Bob" age="23" theme="dark">

✅ <User user={user} theme={theme}>

9. Remove Un-used codes

- No unused imports
- No commented out logic
- No console.log

10. Use Linting + Prettier

If asked:

What do you use to maintain code hygiene?

- ESLint with project-specific rules
- Prettier for formatting
- Husky + lint-staged to prevent bad commits