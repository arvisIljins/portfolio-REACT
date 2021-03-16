import React, { Component } from 'react';
import styled from 'styled-components';
import { PortfolioConsumer, PortfolioContext } from '../Context';
import Title from '../components/Title';
import Loading from '../components/Loading';
import SinglePortfolio from './PortfolioCart';
import { Link } from 'react-router-dom';

export default class FeaturedPortfolio extends Component {
  static contextType = PortfolioContext;

  render() {
    let { loading, featuredPortfolio: portfolio } = this.context;
    portfolio = portfolio.map((portfolios) => {
      return <SinglePortfolio key={portfolios.id} portfolios={portfolios} />;
    });
    return (
      <PortfolioConsumer>
        {(value) => {
          const { modalPortfolioOpen } = value;

          return (
            <Section>
              <div className='row-title'>
                <Title title='portfolio' />
              </div>
              <ModalContainer>
                <div className='featured-rooms-center'>
                  {loading ? <Loading /> : portfolio}
                </div>
              </ModalContainer>
              <div className='button-row'>
                <Link to='/portfolios/'>See all</Link>
              </div>
            </Section>
          );
        }}
      </PortfolioConsumer>
    );
  }
}

const Section = styled.div`
  padding: 0;
  z-index: 999;
  width: 120rem;
  height: 36rem;
  display: block;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  align-items: center;
  justify-content: center;
  background: var(--mainDark);
  box-shadow: 0 0.8rem 1rem 0 var(--mainAccent);
  border-radius: 1.2rem;
  margin-bottom: 2rem;

  .row-title {
    margin-top: 0.5rem;
    justify-content: center;
    position: absolute;
    top: 0;
  }

  .btn-close {
    color: var(--mainText);
    font-size: 3rem;
    display: block;
    cursor: pointer;
    position: absolute;
    top: 0;
    right: 0;
    outline: none;
    border: none;
    background-color: transparent;
  }
  .btn-close:hover {
    color: var(--mainAccent);
  }
  .button-row {
    position: absolute;
    bottom: 2rem;
  }
  @media (max-width: 1300px) {
    width: 100rem;
  }

  @media (max-width: 1112px) {
    width: 36rem;
    height: 70rem;
    top: 5%;
    bottom: 10%;
  }
  @media (max-width: 700px) {
    width: 30rem;
  }
  @media (max-width: 400px) {
    width: 98%;
    top: 2%;
    left: 1%;
    right: 1%;
  }
`;
const ModalContainer = styled.div`
  height: 80%;
  width: auto;
  padding: 0 0;
  z-index: 9999;
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: center;

  #modal {
    background: rgba(0, 0, 0, 0.9);
    color: white;
  }

  .featured-rooms-center {
    width: 80vw;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(27rem, 1fr));
    grid-row-gap: 2rem;
    grid-column-gap: 4rem;
  }
  @media (max-width: 1111px) {
    .featured-rooms-center {
      margin-top: 2rem;
    }
  }
  @media (max-width: 726px) {
    .featured-rooms-center {
      margin-top: 1rem;
    }
  }
  @media (max-width: 600px) {
    .featured-rooms-center {
      margin-top: 1rem;
      grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
      grid-column-gap: 0;
    }
  }
`;
