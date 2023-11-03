import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "components/Footer";

function Layout() {
  return (
    <div className="container">
      <header>
        <NavBar />
      </header>
      <div className="row">
        <Outlet />
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid
          voluptate, eum corrupti dolore accusantium doloribus! Sint vero
          quibusdam vitae harum architecto expedita unde hic fugit animi ut
          tenetur recusandae, aspernatur, aliquam sed repellat commodi in sunt
          est eos adipisci quidem. Itaque, dolorum? Cupiditate tempora
          reiciendis cumque? Dolore error odio tempora, fugit molestiae est ea
          non ullam nisi? Ipsam laudantium quas dolore iusto, numquam, placeat
          consequatur ullam dolorum neque similique delectus! Porro at
          recusandae dolore, delectus necessitatibus assumenda maiores alias
          quos laborum excepturi ea quae dolores ut veritatis modi aperiam. Sit
          accusantium ducimus deserunt atque dolor fugit labore itaque! Aliquid
          eius sunt quaerat inventore voluptatibus cumque repellat blanditiis
          veritatis, vero laboriosam nostrum accusamus unde quae ut laborum
          repellendus velit, nemo molestias, at labore repudiandae. Porro quae
          laboriosam ipsam laudantium voluptates quas ex magnam. Tempore,
          inventore est! Blanditiis vitae eos repellat explicabo ut adipisci
          quos nemo delectus voluptatem aspernatur debitis minima rerum sapiente
          vero illum, labore nisi enim sunt aut totam eveniet molestias quam
          obcaecati! Odio ad quaerat deleniti adipisci recusandae, doloremque
          voluptatibus magnam soluta eius voluptate necessitatibus maxime totam
          molestiae. Beatae porro cum ipsam perferendis molestiae, iste
          possimus. Esse consequatur rerum pariatur possimus praesentium
          obcaecati aperiam mollitia. Dicta nobis reiciendis, aspernatur ipsum
          in facere aliquid reprehenderit quisquam! Expedita sint at culpa
          impedit autem vero ullam inventore recusandae delectus commodi
          praesentium vel quidem eos incidunt quaerat ab alias adipisci, ipsam
          dolores? Porro nesciunt fuga dolorum sit ducimus enim sapiente
          molestias minus et vero debitis voluptates hic doloremque
          exercitationem provident consectetur, repudiandae magni accusantium
          quia obcaecati voluptatem adipisci cum! Modi dolore dolores delectus
          earum amet vel, sapiente dolorem corrupti? Eum accusantium expedita
          exercitationem repudiandae consequatur optio, tenetur nesciunt sequi
          dolore? Nulla laboriosam consequuntur non recusandae, possimus nostrum
          perferendis. Quos explicabo ducimus illo error velit eum quaerat!
          Beatae esse minus delectus nemo eos harum animi eligendi minima
          tempora quis, nam ipsam quaerat? Maxime dignissimos nam reprehenderit
          consectetur nisi, quo impedit nesciunt ab vel deleniti fuga qui,
          itaque dolorem, quas totam inventore molestiae provident voluptates
          ipsa natus accusantium quisquam! Perferendis dicta harum itaque velit
          porro recusandae, vero repudiandae earum veniam sed eius quasi, fugit
          ipsa, deserunt quidem laborum? Nostrum fugit odit incidunt? Unde et
          eum expedita, harum ad praesentium eveniet reprehenderit facere quis
          repudiandae numquam optio impedit magni delectus hic minus quia, sint
          voluptas voluptatem. A, laudantium accusamus illo odit nisi quasi, ex
          similique sequi inventore amet, quas magnam consequuntur eius. Optio
          velit nihil porro corrupti illum eveniet fuga, nulla cum. Veniam,
          illo, asperiores laudantium cum, ipsam sequi architecto quis tempora
          repellat a excepturi placeat? Architecto nihil natus, libero
          voluptates laudantium quaerat nostrum impedit, cum a veniam velit
          corrupti iste fugiat id reiciendis quod laborum doloribus ad
          voluptatum soluta! Iure odit ex quod aliquid ducimus, voluptatibus
          sequi voluptatum consequuntur ad distinctio nobis deserunt asperiores,
          dolorum assumenda fuga repellendus tempora eveniet et repudiandae.
          Nobis nemo autem culpa eaque corporis dolore mollitia corrupti dicta
          omnis qui optio ullam ipsum in, dignissimos natus rem, at asperiores
          iusto sequi veritatis enim architecto delectus! Soluta, dolor quae.
          Est, excepturi consequatur.
        </p>
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default Layout;
