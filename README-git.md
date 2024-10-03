# Conventional Commits

This a short guide outline to write commit messages (incase I forget from time-to-time due to my short-term memory) using the Conventional Commits specification. 

***


**Types**
The following types:
- `feat`: A new feature.
- `fix`: A bug fix.
- `docs`: An update to documentation.
- `test`: Adding of tests.
- `refactor`: Code or file restructuring.
- `style`: Code formatting changes.
- `chore`: Maintenance tasks.


**Conventional Commits**
The popularized structure format for commit messages.

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

**Proper Examples**
Good examples:
```
feat(api): Add new endpoint for creating user data.

This commit adds a new API endpoint to store user data which is accessible at /api/users/store.

Closes #{issue-number}
```

Bad examples:
```
fix(coffee): I may need to rethink my caffeine intake.
```

**References**
For more detailed information, please refer to the Conventional Commits Specification.

- [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) 
