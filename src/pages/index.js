import React from 'react';
import './styles.css';
import BtnWhatsapp from '../components/BtnWhatsapp';
import Logo from '../components/Logo';
import Header from '../components/Header';
import Footer from '../components/Footer';
import img from '../assets/furniture-998265_640.jpg'
import selo from '../assets/selo.jpeg'
import {Helmet} from 'react-helmet';
import {graphql,useStaticQuery} from 'gatsby';

const Hero = () =>{
	return (
		<div className='flex flex-col items-center sm:flex-row justify-between'>
		<div className='px-4 py-8 text-2xl'>
			<h2 className='font-bold text-2xl'>Movéis planejados</h2>
			<p className='text-xl'>Comerciais e residenciais para todos os ambientes</p>
			<p className='text-gray-700'>Atendemos Salinópolis e região</p>
		</div>
		<div>
			<img className='px-2' src={img} alt='Fonte:https://pixabay.com/pt/photos/mobili%C3%A1rio-sala-de-estar-moderna-998265/'/>
		</div>
	</div>
	);
};

const Index = ()=>{
	const selos = [1,2,3,4];
	const projetos = [1,2,3,4,5,6];
	const {site} = useStaticQuery(graphql`
		query MyQuery {
			site {
				siteMetadata {
					title
				}
			}
		}
	`)
	return(
		<div>
			<Helmet>
	<title>{site.siteMetadata.title}</title>
			</Helmet>
			
			<Header>
				<Logo />
				<BtnWhatsapp/>
			</Header>

			<Hero />
			<div className='flex flex-col items-center  sm:flex-row justify-arround'>
				{
					selos.map(
						()=>{
							return	<img className='py-2 object-scale-down h-48 w-full' src={selo} alt='Selo de qualidade garantida'/>
						}
					)	
				}
			</div>

				<div>
					<h2 className='px-8 py-2 text-2xl font-bold'>Projetos de móveis planejados</h2>
					<div className='flex flex-wrap'>
					{
						projetos.map(projItem =>{
						return(
							<div className='max-w-sm'>
								<div className='m-2 rounded shadow-lg'>
								<img src={img} alt='Projeto 1' />
								<div className='px-6 py-4'>
						<p className='font-bold text-xl mb-2'>Projeto {projItem}</p>
									<p className=''>Descrição</p>
								</div>
							</div>
							</div>
						)	
						})
					}
					</div>
					
				</div>
			<Footer>
				<BtnWhatsapp/>
			</Footer>
		</div>
	)
};

export default Index;
