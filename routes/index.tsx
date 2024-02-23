export const handler = ()=> {
  return new Response("", {
    status: 307,
    headers: { Location: "/frase" },
  });

} 
