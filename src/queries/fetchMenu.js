import {graphQLEndpoint} from "@/app/queries/endpoint";

export async function fetchMenu() {
    const graphql = JSON.stringify({
        query: `query GetMainMenu {
      menu(id: "main", idType: NAME) {
        id
        menuItems {
          nodes {
            id
            label
            url
            childItems {
              nodes {
                id
                label
                url
              }
            }
          }
        }
      }
    }`,
        variables: {}
    });

    const response = await fetch(graphQLEndpoint, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: graphql,
    });

    const responseData = await response.json();
    return responseData.data.menu;
}

