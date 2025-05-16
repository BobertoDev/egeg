
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
