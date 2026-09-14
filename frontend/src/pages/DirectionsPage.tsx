import { SimpleMap } from "../components/SimpleMap";

const maplinkLocation = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5142.235792296286!2d8.659389976802636!3d49.877812528429054!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bd70687dca6457%3A0x58ae00de3d9fd3d1!2sW.K.St.V%20Unitas%20Palatia!5e0!3m2!1sde!2sde!4v1789323103135!5m2!1sde!2sde";

export const DirectionsPage = () => {
    return (
        <div>
            <h1>Anfahrt</h1>

            < SimpleMap src={maplinkLocation} />
        </div>
    )
};