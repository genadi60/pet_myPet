import DashboardNavigation from '../DashboardNavigation';
import {Component} from 'react';
import Pet from '../Pet';
import getPets from '../../services/petsService';

class Dashboard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            "pets": []
        }
    }

    componentDidMount(){
        getPets(this.props.match.params.category)
        .then(data => this.setState({
            pets: data
        }));
    }

    componentDidUpdate(prevProps) {
        const category = this.props.match.params.category;
        if (prevProps.match.params.category === category) {
            return;
        }
        getPets(category)
        .then(data => {
            this.setState({pets: data});
        });
    }

    render() {
        return (
            <section className="dashboard">
                <h1>Dashboard</h1>
                <DashboardNavigation/>
                <ul className="other-pets-list">
                    {
                        this.state.pets.map(x => {
                            return <Pet key={x.id} pet={x} />
                        })
                    }
                </ul>
            </section>
        );
    }
}

export default Dashboard;