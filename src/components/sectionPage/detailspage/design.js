import React from "react";
import styles from "./page.module.css";

const design = () => {
  return (
    <div className={styles.pageLayout}>
      <img className={styles['img_sub']} src="https://images.pexels.com/photos/4348401/pexels-photo-4348401.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="designing"/>
      <center>
        <h1 className={styles.heading}>designing</h1>
        <div>
          <p className={styles.p}>
            As your design partner, <span>we create beautiful designs that transform
            end-customer constraints into opportunities for growth.</span> We can help
            you achieve your goals whether you want to launch a new product or
            simply refresh your existing branding. Design is a very personal
            thing. What works for one business may not work for another. That is
            our fundamental philosophy. <span>We become the graphic design partner you
            can rely on to deliver personalised solutions that meet your
            expectations.</span> A brand is more than just a logo or a name. It is the
            totality of a customer's interactions with a company. Every
            interaction, from the initial contact to the post-purchase
            follow-up, provides an opportunity to build a relationship.
          </p>

          <p className={styles.p}>
            Our experts will collaborate with you to create a user-friendly and
            visually appealing UI. We consider your target audience, <span>your brand
            identity, and your overall site objectives.</span>We ensure that the UI
            blends in with the rest of the website's design and is compatible
            with all devices. With our assistance, you can design an appealing
            and fast-loading website that not only looks great but is also easy
            to navigate and ranks well in search engines.<span> We can assist you in
            creating visually stunning visuals that will capture attention and
            produce results. We'll also create a social media strategy for you
            so you can make the most of this powerful marketing tool.</span>
          </p>

          <p className={styles.p}>
            Our digital marketing team provides competent and interesting<span> video
            creation services. We can assist you with producing videos that
            advertise your company, goods, or services. Additionally, you can
            get help from our team of professionals with storyboarding,
            scripting, and graphic design for your video.</span> We are dedicated to
            assisting our clients in producing videos that have an impact and
            are effective because we think that video is a potent marketing
            tool.
          </p>
        </div>
      </center>
    </div>
  );
};

export default design;
