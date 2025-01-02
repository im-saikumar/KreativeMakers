import React from "react";
import styles from "./page.module.css";

const marketing = () => {
  return (
    <div className={styles.pageLayout}>
      <img className={styles['img_sub']} src="https://images.unsplash.com/photo-1557838923-2985c318be48?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1931&q=80" alt="marketing"/>
      <center>
        <h1 className={styles.heading}>marketing</h1>
        <p className={styles.p}>
          The choice to outsource your marketing is significant. It requires a
          growth partner who is prepared to comprehend your vision and<span> business
          objectives and work as an extended team with a goal-oriented focus.</span> We
          also understand that every customer's scenario is distinct, so we
          construct a special strategy on top of our outsourced architecture to
          suit your needs.
        </p>
        <p className={styles.p}>
          According to research, a brand's internet reputation influences
          purchases to the tune of <span>almost 70%. Digital marketing is crucial to
          the expansion of business. An business can acquire full-service
          marketing skills through the outsourcing process, providing them with
          a springboard for expansion.</span> For your growth needs, we are the ideal
          partner because of our value-led, outcome-based methodology.
        </p>
        <p className={styles.p}>
          Our objective is to develop a strategy that will boost your sales
          profitably and give your company a long-lasting competitive edge. <span>We
          accomplish this by having a thorough grasp of your company, brand,
          product, or service, customers, and how your customers value your
          product, as well as the competition.</span> You have an essential, long-term,
          and short-term marketing plan for each client persona at the
          conclusion of this step.
        </p>
      </center>
    </div>
  );
};

export default marketing;
