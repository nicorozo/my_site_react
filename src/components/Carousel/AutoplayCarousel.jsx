import "./Carousel.css";
import { arrayIcons } from "./carousel-config";
import CarouselItem from "./CarouselItems";

export default function AutoplayCarousel() {
  return (
    <div className="carousel-gap">
      <div className="carousel-absolute">
        <div className="carousel-container">
          <div className="carousel-track">
            {Object.keys(arrayIcons).map((detailKey) => {
              return (
                <CarouselItem
                  myIcons={arrayIcons[detailKey]}
                  key={arrayIcons[detailKey]}
                ></CarouselItem>
              );
            })}
            {Object.keys(arrayIcons).map((detailKey) => {
              return (
                <CarouselItem
                  myIcons={arrayIcons[detailKey]}
                  key={arrayIcons[detailKey]}
                ></CarouselItem>
              );
            })}
            {Object.keys(arrayIcons).map((detailKey) => {
              return (
                <CarouselItem
                  myIcons={arrayIcons[detailKey]}
                  key={arrayIcons[detailKey]}
                ></CarouselItem>
              );
            })}
            {Object.keys(arrayIcons).map((detailKey) => {
              return (
                <CarouselItem
                  myIcons={arrayIcons[detailKey]}
                  key={arrayIcons[detailKey]}
                ></CarouselItem>
              );
            })}
          </div>
          {/* 
          Mobile version
          
          */}
          <div className="carousel-track mobile">
            {Object.keys(arrayIcons).map((detailKey) => {
              return (
                <CarouselItem
                  myIcons={arrayIcons[detailKey]}
                  key={arrayIcons[detailKey]}
                ></CarouselItem>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
