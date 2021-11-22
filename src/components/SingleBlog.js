import React from "react";
import Image from "next/image";
import single from "../styles/SingleBlog.module.css";
import { Container, ROw, Col, Button } from "react-bootstrap";

const SingleBlog = () => {
  return (
    <div>
      <Image
        width="2560px"
        height="900px"
        alt="blog image"
        src="/assets/images/shoe.jpg"
        className={single.image}
      />
      <Container>
        <div className={single.rest}>
          <div className={single.title}>
            <h3>TITLE OF THE BLOG</h3>
          </div>
          <div className={single.description}>
            <p className={single.para1}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia,
              iusto eveniet quos eius sit suscipit facere est non exercitationem
              accusantium distinctio tenetur mollitia quibusdam hic beatae,
              ratione aut commodi nobis, sapiente eligendi eum vero dicta
              laborum! Obcaecati maiores, in fugiat architecto, aut magni
              repellendus laudantium ab vel nisi aspernatur officiis neque
              maxime? Aliquid ab laudantium adipisci similique eius dolor facere
              commodi laboriosam eaque iure animi nisi reiciendis, quia iusto
              corrupti eos distinctio dignissimos magni illum! Blanditiis
              repellat itaque repellendus optio. Amet dolorem deserunt
              temporibus, itaque asperiores quidem animi! Fugiat corrupti nobis
              eveniet aliquid neque magnam ea, dolores exercitationem aperiam
              debitis consequatur. Ullam pariatur quisquam cupiditate sapiente
              voluptas ratione id quaerat voluptatum ipsum impedit minus nobis
              facere officiis, fugiat quo necessitatibus maxime temporibus
              corporis aliquid non modi adipisci asperiores quam! Non molestiae
              fugit consequuntur facilis animi dolor sed est debitis voluptate?
              Sint cupiditate qui ad necessitatibus voluptas sequi est quibusdam
              vero, tempore placeat temporibus? Alias voluptate, animi autem
              dicta earum illum quo iure praesentium molestiae esse, iusto
              asperiores quasi fuga blanditiis rem repellendus? Tempora possimus
              id minima cumque vitae dolore aut nobis dolorem debitis harum
              laborum ut labore, quisquam provident vel repellat perspiciatis
              odit esse nulla recusandae distinctio? Optio, voluptates.
              Delectus!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
              laborum iure nostrum iusto explicabo cumque asperiores
              consequuntur accusantium amet accusamus, doloremque mollitia qui.
              Aspernatur molestias dignissimos id tenetur. Ea eveniet, voluptas
              molestias officia eum quas aliquid mollitia explicabo libero
              temporibus inventore nisi eius accusantium. Necessitatibus numquam
              unde minima, dignissimos omnis incidunt, eos doloremque itaque
              consequuntur labore ab accusamus beatae expedita quas hic deserunt
              laboriosam odio, eligendi nulla veritatis temporibus
              exercitationem explicabo optio tempore? Harum aliquid enim ea id
              ipsum, nesciunt dolorum at nostrum unde, distinctio illum officiis
              vero! Tempore, quis ex incidunt voluptate distinctio qui
              exercitationem facere, voluptas odio dolor ducimus nobis
              cupiditate, quam magnam iure in. Consectetur laborum laudantium
              corrupti cum quibusdam voluptas, sit distinctio commodi facere at
              fuga aliquid eligendi minus dignissimos a tempora suscipit unde
              facilis vero consequuntur molestiae, illo eaque enim? Dolor libero
              hic facere itaque atque veritatis aliquam aut dolore ad? Dolor ad
              earum, perspiciatis cupiditate natus laboriosam fuga et, impedit
              ab commodi cum praesentium blanditiis magni maxime ratione nostrum
              minima. Eligendi dolore consequuntur officiis asperiores in
              distinctio, iusto ut voluptates quae quaerat, voluptate non harum
              animi tenetur aspernatur. Molestiae unde aliquid ab adipisci error
              omnis quisquam dicta dignissimos ullam. Dicta omnis iste nulla
              velit!
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default SingleBlog;
