
const data_endpoint = "http://localhost:3000/api/blog";

export async function getAllPosts(page=1, limit=9)
{
    try
    {
        const response = await fetch(`${data_endpoint}?limit=${limit}&page=${page}`);
        if(!response.ok)
        {
            throw new Error(`Couldn't fetch the blog data! ${response.status}`);
        }
        
        return await response.json();

    }catch(error)
    {
        console.error(error);
    }
}


export async function getPostById(id)
{
    try
    {
        const response = await fetch(`http://localhost:3000/api/blog/${id}`)
        if(!response.ok)
        {
            throw new Error(`Couldn't fetch the blog data! ${response.status}`);
        }
        return await response.json();
    }catch(error)
    {
        console.error(error);
    }
}


export async function deletePost(id) {
    try {
        const response = await fetch(`${data_endpoint}/${id}`, {
            method: 'DELETE',
            credentials: "include"
        });

        if (!response.ok) {
            throw new Error(`Failed to delete post. Status: ${response.status}`);
        }

        return await response.json();
    } catch (error) {
        console.error(error);
    }
}


export async function createPost(postData) {
    try {
        const response = await fetch(`${data_endpoint}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                // If using auth: 'Authorization': `Bearer YOUR_TOKEN`,
            },
            body: JSON.stringify(postData),
            credentials: "include"
        });

        if (!response.ok) {
            throw new Error(`Failed to create post. Status: ${response.status}`);
        }

        return await response.json();
    } catch (error) {
        console.error(error);
    }
}

export async function updatePost(id, updatedData) {
    try {
        const response = await fetch(`${data_endpoint}/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                // If using auth: 'Authorization': `Bearer YOUR_TOKEN`,
            },
            body: JSON.stringify(updatedData),
            credentials: "include"
        });

        if (!response.ok) {
            throw new Error(`Failed to update post. Status: ${response.status}`);
        }

        return await response.json();
    } catch (error) {
        console.error(error);
    }
}
