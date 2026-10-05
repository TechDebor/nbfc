import React from 'react';

export const NamdevHero: React.FC = () => {
  return (
    <>
      <style>{`
        .namdev-hero {
          position: relative;
          width: 100%;
          background: #eaf5ff;
          overflow: hidden;
          font-family: "Inter", Arial, sans-serif;
          color: #0b2e69;
        }

        .hero-artwork {
          position: relative;
          width: 100%;
          max-width: 2048px;
          margin: 0 auto;
          aspect-ratio: 2048 / 682;
          overflow: hidden;
        }

        .hero-artwork > img {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: contain;
          object-position: center;
          user-select: none;
          -webkit-user-drag: none;
        }

        .hero-info-strip {
          position: absolute;
          left: 3.2%;
          bottom: 45px;
          z-index: 20;

          width: 40%;
          min-height: 42px;

          display: grid;
          grid-template-columns: repeat(5, minmax(0, 1fr));
          align-items: center;

          background: rgba(255, 255, 255, .82);
          border: 1px solid rgba(255, 255, 255, .92);
          border-radius: 12px;

          box-shadow:
            0 10px 28px rgba(9, 53, 123, .13),
            inset 0 1px 0 rgba(255, 255, 255, .9);

          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);

          overflow: hidden;
        }

        .info-item {
          min-width: 0;
          min-height: 42px;

          padding: 5px 8px;

          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;

          position: relative;
          text-decoration: none;

          transition:
            background .2s ease,
            transform .2s ease;
        }

        .info-item:hover {
          background: rgba(236, 246, 255, .86);
        }

        .info-item:not(:last-child)::after {
          content: "";
          position: absolute;
          right: 0;
          width: 1px;
          height: 42%;
          background: #d7e6f5;
        }

        .info-icon {
          width: 24px;
          height: 24px;
          flex: 0 0 24px;

          display: grid;
          place-items: center;

          border-radius: 7px;

          background: linear-gradient(145deg, #edf6ff, #dcecff);
          color: #0b62d3;

          font-size: 13px;
        }

        .info-copy {
          min-width: 0;
          display: flex;
          flex-direction: column;
          gap: 1px;
        }

        .info-copy strong {
          display: block;
          color: #143b72;
          font-size: 9.2px;
          line-height: 1.1;
          font-weight: 800;

          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .info-copy span {
          display: block;
          color: #7588a4;
          font-size: 7px;
          line-height: 1.05;

          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .hotspot {
          position: absolute;
          z-index: 10;
          display: block;
          background: transparent;
          border: 0;
          text-decoration: none;
          cursor: pointer;
        }

        .loan-two-wheeler {
          left: 3.1%;
          top: 60.4%;
          width: 5.4%;
          height: 17.9%
        }

        .loan-msme {
          left: 9.0%;
          top: 60.4%;
          width: 5.3%;
          height: 17.9%
        }

        .loan-solar {
          left: 14.9%;
          top: 60.4%;
          width: 5.4%;
          height: 17.9%
        }

        .loan-erickshaw {
          left: 20.8%;
          top: 60.4%;
          width: 5.5%;
          height: 17.9%
        }

        .loan-tractor {
          left: 26.9%;
          top: 60.4%;
          width: 5.2%;
          height: 17.9%
        }

        .loan-lap {
          left: 32.4%;
          top: 60.4%;
          width: 5.0%;
          height: 17.9%
        }

        .ceo-dossier {
          left: 81.7%;
          top: 83.4%;
          width: 12.9%;
          height: 9.3%
        }

        @media (max-width:1100px) {
          .hero-info-strip {
            left: 3%;
            right: 3%;
            bottom: 6px;
            width: auto;
            grid-template-columns: repeat(5, minmax(0, 1fr));
            border-radius: 10px;
          }

          .info-item {
            min-height: 38px;
            padding: 4px 6px;
          }

          .info-icon {
            width: 21px;
            height: 21px;
            flex-basis: 21px;
            font-size: 11px;
          }

          .info-copy strong {
            font-size: 7.8px;
          }

          .info-copy span {
            font-size: 6px;
          }
        }

        @media (max-width:700px) {
          .hero-artwork {
            aspect-ratio: 2048 / 682;
          }

          .hero-info-strip {
            left: 3px;
            right: 3px;
            bottom: 2px;
            width: auto;
            min-height: 30px;

            display: flex;
            gap: 4px;

            padding: 3px;

            overflow-x: auto;
            overflow-y: hidden;

            border-radius: 9px;

            scrollbar-width: none;
          }

          .hero-info-strip::-webkit-scrollbar {
            display: none;
          }

          .info-item {
            flex: 0 0 auto;
            min-width: 86px;
            min-height: 28px;

            padding: 3px 5px;
            gap: 4px;

            border: 0 !important;
            border-radius: 6px;

            background: rgba(255, 255, 255, .72);
          }

          .info-item::after {
            display: none !important;
          }

          .info-icon {
            width: 18px;
            height: 18px;
            flex-basis: 18px;

            border-radius: 5px;
            font-size: 10px;
          }

          .info-copy strong {
            font-size: 6.5px;
          }

          .info-copy span {
            display: none;
          }
        }

        @media (max-width:430px) {
          .hero-info-strip {
            left: 2px;
            right: 2px;
            bottom: 1px;
            padding: 2px;
          }

          .info-item {
            min-width: 78px;
          }

          .info-copy strong {
            font-size: 5.8px;
          }
        }
      `}</style>
      <div className="relative w-full rounded-2xl overflow-hidden border border-sky-200/90 shadow-md bg-white select-none group">
        <section className="namdev-hero" aria-label="Namdev Finvest Limited hero">
          <div className="hero-artwork">
            <img
              src="/assets/namdev-hero.png"
              alt="Namdev Finvest Limited - Empowering with Care, Compassion and Confidence"
            />

            <a className="hotspot loan-two-wheeler" href="https://www.namfin.in/product/two-wheeler-loan" aria-label="Two Wheeler Loan" target="_blank" rel="noopener noreferrer"></a>
            <a className="hotspot loan-msme" href="https://www.namfin.in/product/msme-loan" aria-label="MSME Loan" target="_blank" rel="noopener noreferrer"></a>
            <a className="hotspot loan-solar" href="https://www.namfin.in/product/solar-loan" aria-label="Solar Loan" target="_blank" rel="noopener noreferrer"></a>
            <a className="hotspot loan-erickshaw" href="https://www.namfin.in/product/e-rickshaw" aria-label="E-Rickshaw Loan" target="_blank" rel="noopener noreferrer"></a>
            <a className="hotspot loan-tractor" href="https://www.namfin.in/Tractor-loan" aria-label="Tractor Loan" target="_blank" rel="noopener noreferrer"></a>
            <a className="hotspot loan-lap" href="https://www.namfin.in/Lap-loan" aria-label="Loan Against Property" target="_blank" rel="noopener noreferrer"></a>
            <a className="hotspot ceo-dossier" href="https://www.namfin.in/" aria-label="CEO Dossier" target="_blank" rel="noopener noreferrer"></a>

            <div className="hero-info-strip">
              <a className="info-item" href="https://www.namfin.in/about/who-we-are" target="_blank" rel="noopener noreferrer">
                <div className="info-icon">
                  <i className="ri-money-rupee-circle-line"></i>
                </div>
                <div className="info-copy">
                  <strong>&#8377; 1,828.85 CR</strong>
                  <span>AUM</span>
                </div>
              </a>

              <a className="info-item" href="https://www.namfin.in/about/who-we-are" target="_blank" rel="noopener noreferrer">
                <div className="info-icon">
                  <i className="ri-user-heart-line"></i>
                </div>
                <div className="info-copy">
                  <strong>46,568</strong>
                  <span>Active Borrowers</span>
                </div>
              </a>

              <a className="info-item" href="https://www.namfin.in/about/who-we-are" target="_blank" rel="noopener noreferrer">
                <div className="info-icon">
                  <i className="ri-building-2-line"></i>
                </div>
                <div className="info-copy">
                  <strong>137+</strong>
                  <span>Branches</span>
                </div>
              </a>

              <a className="info-item" href="https://www.namfin.in/about/who-we-are" target="_blank" rel="noopener noreferrer">
                <div className="info-icon">
                  <i className="ri-team-line"></i>
                </div>
                <div className="info-copy">
                  <strong>1,657+</strong>
                  <span>Employees</span>
                </div>
              </a>

              <a className="info-item" href="https://www.namfin.in/about/who-we-are" target="_blank" rel="noopener noreferrer">
                <div className="info-icon">
                  <i className="ri-map-pin-2-line"></i>
                </div>
                <div className="info-copy">
                  <strong>9</strong>
                  <span>States</span>
                </div>
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
