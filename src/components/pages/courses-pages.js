import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import * as courseActions from '../../actions/course-actions';
import { bindActionCreators } from 'redux';

class CoursesPages extends Component
{
    constructor(props, context) {
        super(props, context);

        this.state = {
            course: {
                title : ''
            }
        }

        this.onClickSave   = this.onClickSave.bind(this);
        this.onTitleChange = this.onTitleChange.bind(this);
    }

    render() {
        return(
            <div>
                <h1>Courses</h1>
                { this.props.courses.map(this.courseRow) }
                <hr />
                <h2>Add course</h2>
                <input
                    type="text"
                    onChange={ this.onTitleChange }
                    value={ this.state.course.title } />
                <input
                    type="submit"
                    value="Save"
                    onClick={ this.onClickSave } />
            </div>
        );
    }

    courseRow(course, index) {
        return (
            <div key={ index }>
                { course.title }
            </div>
        );
    }

    onClickSave() {
        this.props.actions.createCourse(this.state.course);
    }

    onTitleChange(event) {
        const course = this.state.course;
        course.title = event.target.value;
        this.setState({ course: course });
    }
}

CoursesPages.propTypes = {
    courses: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
};

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(courseActions, dispatch)
    };

    // actions: bindActionCreators(courseActions.createCourse, dispatch)
    // createCourse: course => dispatch(courseActions.createCourse(course))
}

export default connect(
    (state, ownProps) => ({
        courses: state.courses
    }),
    mapDispatchToProps
)(CoursesPages);