import React, { useState, useRef, useEffect } from "react";

import {
  CarouselButton,
  CarouselButtonDot,
  CarouselButtons,
  CarouselContainer,
  CarouselItem,
  CarouselItemImg,
  CarouselItemText,
  CarouselItemTitle,
  CarouselMobileScrollNode,
} from "./TimeLineStyles";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { TimeLineData } from "../../constants/constants";
import ItemLine from "./ItemLine";

const TOTAL_CAROUSEL_COUNT = TimeLineData.length;

const Timeline = () => {
  const [activeItem, setActiveItem] = useState(0);
  const carouselRef = useRef();

  const scroll = (node, left) => {
    return node.scrollTo({ left, behavior: "smooth" });
  };

  const handleClick = (e, i) => {
    e.preventDefault();

    if (carouselRef.current) {
      const scrollLeft = Math.floor(
        carouselRef.current.scrollWidth * 0.7 * (i / TimeLineData.length)
      );

      scroll(carouselRef.current, scrollLeft);
    }
  };

  const handleScroll = () => {
    if (carouselRef.current) {
      const index = Math.round(
        (carouselRef.current.scrollLeft /
          (carouselRef.current.scrollWidth * 0.7)) *
          TimeLineData.length
      );

      setActiveItem(index);
    }
  };

  // snap back to beginning of scroll when window is resized
  // avoids a bug where content is covered up if coming from smaller screen
  useEffect(() => {
    const handleResize = () => {
      scroll(carouselRef.current, 0);
    };

    window.addEventListener("resize", handleResize);
  }, []);

  return (
    <Section id="About">
      <SectionDivider />
      <br />
      <SectionTitle>Sobre mi</SectionTitle>
      <SectionText>
        Soy un apasionado autodidacta en la ciencia de la computación,
        fotografía y Filmmaking. Desde los <b>14 años</b>, comencé mi camino
        como desarrollador web como hobby y ha evolucionado hasta convertirme en
        un <b>programador Full-Stack</b> experimentado.
        <br />
        <br />
        <i>🟢</i> He adquirido mis habilidades a través de bootcamps intensivos,
        cursos, mentores y años de estudio autónomo. Además, mi experiencia como
        fotógrafo y filmmaker me ha permitido desarrollar habilidades de
        comunicación efectivas y presencia en público, lo que me ha ayudado a
        liderar equipos de trabajo y presentar proyectos con confianza.
        <br />
        <br />
        <i>🟢</i> Me encanta compartir mis conocimientos y aprender de otros,
        creo firmemente en que el aprendizaje es un proceso mutuo en el que
        tanto el maestro como el alumno pueden crecer juntos.
        <br />
        <br />
        <i>🔴</i> Siempre estoy buscando nuevos desafíos y oportunidades de
        crecimiento profesional, y estoy comprometido a contribuir al{" "}
        <b>éxito</b> de cualquier proyecto en el que participe.
        <br />
        <br />
        <b>
          <i>💬 </i>
          Si estás interesado en conocer más sobre mi experiencia y habilidades,
          no dudes en contactarme.
        </b>
      </SectionText>
      <CarouselContainer ref={carouselRef} onScroll={handleScroll}>
        <>
          {TimeLineData.map((item, index) => (
            <CarouselMobileScrollNode
              key={index}
              final={index === TOTAL_CAROUSEL_COUNT - 1}
            >
              <CarouselItem
                index={index}
                id={`carousel__item-${index}`}
                active={activeItem}
                onClick={(e) => handleClick(e, index)}
              >
                <CarouselItemTitle>
                  {item.year}
                  <ItemLine />
                </CarouselItemTitle>
                <CarouselItemText>{item.text}</CarouselItemText>
              </CarouselItem>
            </CarouselMobileScrollNode>
          ))}
        </>
      </CarouselContainer>
      <CarouselButtons>
        {TimeLineData.map((item, index) => (
          <CarouselButton
            key={index}
            index={index}
            active={activeItem}
            onClick={(e) => handleClick(e, index)}
            type="button"
          >
            <CarouselButtonDot active={activeItem} />
          </CarouselButton>
        ))}
      </CarouselButtons>
      {/* <SectionDivider /> */}
    </Section>
  );
};

export default Timeline;
