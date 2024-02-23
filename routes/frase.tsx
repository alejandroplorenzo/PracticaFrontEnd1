import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import Axios from "npm:axios"
import Button from "../components/Button.tsx"
type Data = {
  frase: string;
};

export const handler: Handlers = {
  GET: async (_req: Request, ctx: FreshContext<unknown, Data>) => {
    try {    
      const response = await Axios.get(
        `https://learnyourlesson.deno.dev/`
        );
      const data:Data = {
        frase: response.data
      } 

      return ctx.render(data);
    } catch (e) {
      console.error(e);
      throw new Error("Ha habido un error");
    }
  },
};

const Page = (props: PageProps<Data>) => {
  const data = props.data;
  console.log(data.frase);
  return (
   <div style={{
      backgroundImage: 'url(https://wallpapercave.com/wp/wp1996290.jpg)', 
      backgroundSize: 'cover', 
      backgroundColor: "#4CAF50",
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh', 
    }}>
      <div style={{
        backgroundColor: "white", 
        borderRadius: '5px',
        padding: '20px',
        textAlign: 'center',
        animationName: 'example', 
        animationDuration: '10s', 
        animationIterationCount: 'infinite',
      }}
      >
        <h1 style={{color: 'green'}}>FRASE MOTIVADORA:</h1>
        <p>{data.frase}</p>
      </div>
      <div style={{
         position: 'absolute',
         top: '165px',
         left: '100px',
        }}>
          <img
          src="https://optimitzat.com/wp-content/uploads/2017/01/coach-a-lleida-1080x500.jpg"
          alt="Imagen motivacional"
          class="a"
          />
        </div>
        <div style={{
         position: 'absolute',
         top: '150px',
         left: '1220px',
        }}>
          <img
          src="https://img.freepik.com/foto-gratis/lobo-entorno-natural_23-2150526668.jpg?w=360&t=st=1708603649~exp=1708604249~hmac=cda4c749fe4858b985ee8c2242e4304ed2f76064a7dc554a4b9462ccd9ff090d"
          alt="lobo"
          class = "b"
          />
        </div>
        <div style={{
         top: '550px',
         left: '650px',
        }}>
          <img
          src="https://cdn.businessinsider.es/sites/navi.axelspringer.es/public/media/image/2022/10/dinero-fajo-billetes-dolar-2847961.jpg?tf=1200x"
          alt="dinero"
          class = "c"
          />
        </div>
        <div>
          <Button variant="primary">Botón 1</Button>
          <Button variant="secondary">Botón 2</Button>
        </div>
    </div>   
  );
};

export default Page;



