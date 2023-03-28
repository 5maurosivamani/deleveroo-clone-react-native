import  sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url"

const client = sanityClient({
    projectId: '0t7ztaze',
    dataset: 'production',
    useCdn: true,
    apiVersion:"2021-10-21"
})

const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);

// Run this to add exeption for Localhost 19006 cors policy
// Sanity cors add http://localhost:19006/ 

export default client;