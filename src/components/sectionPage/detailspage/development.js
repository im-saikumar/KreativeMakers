import React from "react";
import styles from "./page.module.css";

const development = () => {
  return (
    <div className={styles.pageLayout}>
      <img className={styles['img_sub']} src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80" alt="development"/>
      <center>
        <h1 className={styles.heading}>development</h1>
        <p className={styles.p}>
          A website can serve a variety of purposes, so your company should do
          all possible to take advantage of all of them. A website has a big
          part to play, especially with the paradigm shift in how consumers
          connect with brands. The replacement for going from store to store is
          now browsing from website to website. A user-friendly, stylish, and
          appealing website is thus urgently needed. <span>It is essential to
          increasing your conversion rates. Additionally, interacting with and
          gratifying your users after a conversion will offer your company a
          boost in the online market.</span>
        </p>
        <p className={styles.p}>
          Your website needs to be distinctive if your company is. We
          collaborate with you<span> to develop an online presence that stands out
          from the competition, captures the essence of your business, and
          quickly establishes trust with both current and potential clients,
          investors, or staff.</span> Building a highly effective E-commerce website to
          meet customer expectations has become important, especially with the
          sharp increase in online sales.
        </p>
        <p className={styles.p}>
          A business must produce leads, thus you must set goals and work hard
          to achieve them in order to do so.<span> With outstanding design, a
          wonderful user experience, a clever content strategy, interactive
          sections,</span> and the correct pieces in the right places, we help you
          create websites that can produce leads.
        </p>
      </center>
    </div>
  );
};

export default development;
