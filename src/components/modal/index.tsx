import { Component } from "solid-js";
import { Button } from "../../components/button";
import { Spacer } from "../../components/spacer";
import { Text } from "../../components/text";
import styles from "./index.module.css";
export const Modal: Component<{ onClose: () => void }> = ({ onClose }) => (
  <div class={styles.container}>
    <div class={styles.containerContent}>
      <Text size="s">
        <strong>
          Important
        </strong>
        <br />
        <strong>
          Please don't lock your screen. (We&nbsp;need this for the
          page to work.)
        </strong>
        <br />
        <br />
        Take it easy, don’t rush.
        <br />
        <br />
        The timer will run in the background. I’ll play a sound when time’s up, and every minute after, so you can fully relax without worrying about the clock.
        <br />
        <br />
        Enjoy your break! 🌿
        <br />
        <br />
      </Text>
      <Spacer />
      <Button label="OK" onClick={onClose} />
    </div>
  </div>
);
