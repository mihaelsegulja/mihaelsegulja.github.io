import { useState, useEffect } from "react";

import { type FancyboxOptions, Fancybox } from "@fancyapps/ui/dist/fancybox/";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

export default function useFancybox(options: Partial<FancyboxOptions> = {}) {
  const [root, setRoot] = useState<HTMLElement | null>(null);

  useEffect(() => {
    if (root) {
      Fancybox.bind(root, "[data-fancybox]", {
          mainStyle: {
            "--f-thumb-border-radius": "0",
            "--f-arrow-border-radius": "0",
            "--f-thumb-opacity": "0.5",
            "--f-thumb-hover-opacity": "1",
            "--f-thumb-selected-opacity": "1",
            "--fancybox-backdrop-bg": "#30303030"
          },
          zoomEffect: false,
          fadeEffect: false,
          showClass: false,
          hideClass: false,
          Carousel: {
            Thumbs: {
              type: "classic",
            },
          },
          ...options
        });
      return () => Fancybox.unbind(root);
    }
  }, [root, options]);

  return [setRoot];
}
