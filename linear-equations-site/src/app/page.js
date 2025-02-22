"use client";
import styles from "./page.module.css";
import Graph from "./components/Graph/Graph";
import { useState } from "react";
import QuizType from "./components/QuizType/QuizType";

export default function Home() {
  const [run, setRun] = useState(0);
  const [rise, setRise] = useState(0);

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.content}>
          <section>
            <h1>Heading 1</h1>
            <div className={styles.textBlock}>
              <h2>Heading 2</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu efficitur justo. Proin tempus rhoncus tincidunt. Mauris efficitur nunc diam, vel viverra nibh vehicula a. Donec vel nisl id nulla auctor interdum. Maecenas sem dui, laoreet mattis ultricies sed, pretium sit amet justo. Curabitur ac tellus eu lacus luctus elementum. Cras ut lorem blandit, varius ante vitae, ultricies sapien. Donec pretium tortor ut massa pretium placerat in id ligula. Phasellus non ex vel diam luctus tempor. Cras malesuada, leo a posuere hendrerit, sem nibh congue odio, sit amet porttitor dolor metus a nisl. Nam neque lectus, efficitur vitae accumsan vitae, suscipit vel metus. Maecenas congue felis sit amet metus efficitur fringilla. Aenean eleifend ex porttitor, condimentum est eget, laoreet sem</p>
              <QuizType 
                question={"What does m mean?"}
                answers={["rise over run","slope"]}
              />
            </div>
          </section>
          <div>
            <div className={styles.textBlock}>
              <h1>Heading 1</h1>
              <h2>Heading 2</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu efficitur justo. Proin tempus rhoncus tincidunt. Mauris efficitur nunc diam, vel viverra nibh vehicula a. Donec vel nisl id nulla auctor interdum. Maecenas sem dui, laoreet mattis ultricies sed, pretium sit amet justo. Curabitur ac tellus eu lacus luctus elementum. Cras ut lorem blandit, varius ante vitae, ultricies sapien. Donec pretium tortor ut massa pretium placerat in id ligula. Phasellus non ex vel diam luctus tempor. Cras malesuada, leo a posuere hendrerit, sem nibh congue odio, sit amet porttitor dolor metus a nisl. Nam neque lectus, efficitur vitae accumsan vitae, suscipit vel metus. Maecenas congue felis sit amet metus efficitur fringilla. Aenean eleifend ex porttitor, condimentum est eget, laoreet sem</p>
              <QuizType 
                question={"What is the y intercept formula?"}
                answers={["y=mx+b","y=m*x+b","f(x)=mx+b","f(x)=m*x+b"]}
              />
            </div>
          </div>
          <section>
            <h1>Heading 1</h1>
            <Graph 
              width={300} 
              height={300}

              run={run}
              setRun={setRun}

              rise={rise}
              setRise={setRise}
            /> 
            <div className={styles.textBlock}>
              <h1>Heading 1</h1>
              <h2>Heading 2</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu efficitur justo. Proin tempus rhoncus tincidunt. Mauris efficitur nunc diam, vel viverra nibh vehicula a. Donec vel nisl id nulla auctor interdum. Maecenas sem dui, laoreet mattis ultricies sed, pretium sit amet justo. Curabitur ac tellus eu lacus luctus elementum. Cras ut lorem blandit, varius ante vitae, ultricies sapien. Donec pretium tortor ut massa pretium placerat in id ligula. Phasellus non ex vel diam luctus tempor. Cras malesuada, leo a posuere hendrerit, sem nibh congue odio, sit amet porttitor dolor metus a nisl. Nam neque lectus, efficitur vitae accumsan vitae, suscipit vel metus. Maecenas congue felis sit amet metus efficitur fringilla. Aenean eleifend ex porttitor, condimentum est eget, laoreet sem</p>
            </div>
          </section>
          
        </div>
      </main>
      
    </div>
  );
}
