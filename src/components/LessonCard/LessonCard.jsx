import CardStyle from "./LessonCard.module.css"
import data from "../../helper/data"

const LessonCard = () => {
    
    return data.map((item) => (

        
        <div className={CardStyle.lesson} key={item.id}>
            <div>
                <img src={item.image} alt="" />
            </div>
            <div className={CardStyle["lesson-text"]}>
                <p>Lesson Name: <span>{item.name}</span></p>
                <p>Lesson Hour: <span>{item.hour}</span></p>
            </div>
        </div>
    ))
}

export default LessonCard