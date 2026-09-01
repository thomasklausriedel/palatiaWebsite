import { SimpleMap } from "../components/SimpleMap";

const maplinkLocation = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2534.7855632538012!2d8.284096076834215!3d50.556757679703395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bc3a249cbc0049%3A0xf43376d082d36221!2sOutdoor-Zentrum-Lahntal%20GmbH!5e0!3m2!1sde!2sde!4v1787902576242!5m2!1sde!2sde";

export const DirectionsPage = () => {
    return (
        <div>
            <h1>Anfahrt</h1>

            < SimpleMap src={maplinkLocation} />
        </div>
    )
};