import React, { useRef, useEffect, useCallback, useState } from 'react';
import {ReactComponent as FlechaIzquierda} from './img/iconmonstr-angel-left-thin.svg';
import {ReactComponent as FlechaDerecha} from './img/iconmonstr-angel-right-thin.svg';
import styled from 'styled-components'

const Slideshow = ({
	children,
	controles = true,
	autoplay = false,
	velocidad = '400',
	intervalo = '5000',
}) => {
	const [timePrev, setTimePrev] = useState(false);

	const slideshow = useRef(null);
	const intervaloSlideshow = useRef(null);

	const siguiente = useCallback(() => {
		// Comprobamos que el slideshow tenga elementos
		if (slideshow.current.children.length > 0) {
			// Obtenemos el primer elemento del slideshow.
			const primerElemento = slideshow.current.children[0];

			// Establecemos la transicion para el slideshow.
			slideshow.current.style.transition = `${velocidad}ms ease-out all`;

			const tamañoSlide = slideshow.current.children[0].offsetWidth;

			// Movemos el slideshow
			slideshow.current.style.transform = `translateX(-${tamañoSlide}px)`;

			const transicion = () => {
				// Reiniciamos la posicion del Slideshow.
				slideshow.current.style.transition = 'none';
				slideshow.current.style.transform = `translateX(0)`;

				// Tomamos el primer elemento y lo mandamos al final.
				slideshow.current.appendChild(primerElemento);

				slideshow.current.removeEventListener('transitionend', transicion);
			};

			// Eventlistener para cuando termina la animacion.
			slideshow.current.addEventListener('transitionend', transicion);
		}
	}, [velocidad]);

	const anterior = () => {
		if (slideshow.current.children.length > 0 && timePrev) {
			setTimePrev(false);
			// Obtenemos el ultimo elemento del slideshow.
			const index = slideshow.current.children.length - 1;
			const ultimoElemento = slideshow.current.children[index];
			slideshow.current.insertBefore(
				ultimoElemento,
				slideshow.current.firstChild
			);

			slideshow.current.style.transition = 'none';
			const tamañoSlide = slideshow.current.children[0].offsetWidth;
			slideshow.current.style.transform = `translateX(-${tamañoSlide}px)`;

			setTimeout(() => {
				slideshow.current.style.transition = `${velocidad}ms ease-out all`;
				slideshow.current.style.transform = `translateX(0)`;
			}, 30);
		}
	};

	useEffect(() => {
		if (autoplay) {
			intervaloSlideshow.current = setInterval(() => {
				siguiente();
			}, intervalo);

			// Eliminamos los intervalos
			slideshow.current.addEventListener('mouseenter', () => {
				clearInterval(intervaloSlideshow.current);
			});

			// Volvemos a poner el intervalo cuando saquen el cursor del slideshow
			slideshow.current.addEventListener('mouseleave', () => {
				intervaloSlideshow.current = setInterval(() => {
					siguiente();
				}, intervalo);
			});
		}
	}, [autoplay, intervalo, siguiente]);

	useEffect(() => {
		if (!timePrev)
			setTimeout(() => {
				setTimePrev(true);
			}, 500);
	}, [timePrev]);

	return (
		<ContenedorPrincipal>
			<ContenedorSlideshow ref={slideshow}>{children}</ContenedorSlideshow>
			{controles && (
				<Controles id='controls'>
					<Boton onClick={anterior}>
						<FlechaIzquierda />
					</Boton>
					<Boton derecho onClick={siguiente}>
						<FlechaDerecha />
					</Boton>
				</Controles>
			)}
		</ContenedorPrincipal>
	);
};

const ContenedorPrincipal = styled.div`
	position: relative;
	overflow: hidden;
`;

const ContenedorSlideshow = styled.div`
	display: flex;
	flex-wrap: nowrap;

	&:hover + #controls {
		opacity: 1;
		transition: 400ms;
		transition-delay: 150ms;
	}

`;

const Slide = styled.div`
	min-width: 100%;
	overflow: hidden;
	transition: 0.3s ease all;
	z-index: 10;
	/* max-height: 500px; */
	position: relative;

	img {
		width: 100%;
		vertical-align: top;
	}
`;

const TextoSlide = styled.div`
	background: ${(props) =>
		props.colorFondo ? props.colorFondo : 'rgba(0,0,0,.3)'};
	color: ${(props) => (props.colorTexto ? props.colorTexto : '#fff')};
	width: 100%;
	padding: 10px 60px;
	text-align: center;
	position: absolute;
	bottom: 0;

	@media screen and (max-width: 700px) {
		position: relative;
		background: #000;
	}
`;

const Controles = styled.div`
	position: absolute;
	top: 0;
	z-index: 200;
	width: 100%;
	height: 100%;
	pointer-events: none;
	opacity: 0;
	transition: 300ms;
	transition-delay: 150ms;

	&:hover {
		opacity: 1;
		transition: 400ms;
		transition-delay: 150ms;
	}

	@media ${props => props.theme.breakpoints.md} {
  		opacity: 1;
		-webkit-tap-highlight-color: rgba(255, 255, 255, 0.07);
	}
`;

const Boton = styled.button`
	pointer-events: all;
	background: none;
	border: none;
	cursor: pointer;
	outline: none;
	width: 40px;
	height: 100%;
	text-align: center;
	position: absolute;
	transition: 0.3s ease all;
	display: flex;
	justify-content: center;
	align-items: center;
	transition: 400ms;

	&:hover {
		transition: 400ms;
		scale: 1.2;

		background: rgba(0,0,0,.18);

	}

	&:focus {
		border: none;
		outline: none;
	}
	&:hover {
		
	}

	path {
		filter: ${(props) =>
			props.derecho
				? 'drop-shadow(-2px 0px 0px #fff)'
				: 'drop-shadow(2px 0px 0px #fff)'};
	}

	${(props) => (props.derecho ? 'right: 0' : 'left: 0')}
`;

export { Slideshow, Slide, TextoSlide };
