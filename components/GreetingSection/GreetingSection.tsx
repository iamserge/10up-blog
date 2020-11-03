import { useGlobal } from '../../providers/global';

const GreetingSection = () => {
    const { userName } = useGlobal();
    return (
        <section className="welcome logged-in page-heading">
            Welcome <span>{userName}</span>!
        </section>
    )
    
}

export default GreetingSection;
