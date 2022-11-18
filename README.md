# React-Github-User-Search

The goal is to create a simple web application which makes a request to an API, parses the response, and displays the result in the UI. The app will consist of **two major components** - one **search** component and one **results** component.

### Problem

After the investigation, I found that GitHub user search API not allowing sort by `login` at the moment, so Server-Side-Sort is actually not implemented.

### Additions

- [Material UI](https://mui.com/) for the CSS library
- [GitHub Pages](https://pages.github.com) for the deployment

### Search Component

This component should contain two elements:

- 'Login' Text input for entering a String value
- 'Submit' Button for initiating a request to
  `https://api.github.com/search/users?q={login} in:login`, where {login} is the input value

```bash
# Example curl GET request to search for for login `foo`
curl --request GET '[https://api.github.com/search/users?q=foo in:login](https://api.github.com/search/users?q=foo%20in:login)'
```

### Results Component

This component should contain a single element:

- Results Table for displaying the results of the User search

The results table has the following requirements:

- Display three columns from the response:
    - `avatar_url`
    - `login`
    - `type`
- Use [Pagination](https://docs.github.com/en/rest/guides/traversing-with-pagination#basics-of-pagination), with **9** items displayed Per_Page
- Allow Sorting, with the `login` column being sorted by default

## Use-Case

- After the app is launched, the **Search** component is displayed
- The user enters a random String value into to the 'Login' field and clicks the 'Submit' button
- The app sends a http request to `https://api.github.com/search/users?q={login} in:login`, where {login} is the String value entered by the user
- The app then parses the response from the server. If data is returned, the **Results** component should display the fetched values. If there is an issue with the request, then an error message should be displayed.
