import React from "react";
import "./testimonials.css";
import avatar1 from "../../assets/avatar1.png";
import avatar2 from "../../assets/avatar2.png";
import avatar3 from "../../assets/avatar3.png";
import avatar4 from "../../assets/avatar4.png";

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Reviews from clients</h5>
      <h2>Testimonials</h2>
      <div className="container testimonials__container">
        <article className="testimonial">
          <div className="client__avatar">
            <img src={avatar1} alt="avatar1" />
            <h5 className="client__name">John Smith</h5>
            <small className="client__review">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
              voluptates ratione consequatur eligendi ipsum facere quidem in
              error veritatis aperiam quae doloremque praesentium quibusdam
              totam, expedita eveniet? Corporis, temporibus repellat?
            </small>
          </div>
        </article>
        <article className="testimonial">
          <div className="client__avatar">
            <img src={avatar2} alt="avatar2" />
            <h5 className="client__name">John Smith</h5>
            <small className="client__review">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
              voluptates ratione consequatur eligendi ipsum facere quidem in
              error veritatis aperiam quae doloremque praesentium quibusdam
              totam, expedita eveniet? Corporis, temporibus repellat?
            </small>
          </div>
        </article>
        <article className="testimonial">
          <div className="client__avatar">
            <img src={avatar3} alt="avatar3" />
            <h5 className="client__name">John Smith</h5>
            <small className="client__review">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
              voluptates ratione consequatur eligendi ipsum facere quidem in
              error veritatis aperiam quae doloremque praesentium quibusdam
              totam, expedita eveniet? Corporis, temporibus repellat?
            </small>
          </div>
        </article>
        <article className="testimonial">
          <div className="client__avatar">
            <img src={avatar4} alt="avatar4" />
            <h5 className="client__name">John Smith</h5>
            <small className="client__review">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
              voluptates ratione consequatur eligendi ipsum facere quidem in
              error veritatis aperiam quae doloremque praesentium quibusdam
              totam, expedita eveniet? Corporis, temporibus repellat?
            </small>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Testimonials;
