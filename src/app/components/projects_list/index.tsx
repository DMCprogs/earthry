import React from 'react';
import {DivWrapperListProjectsSC} from "@/app/components/projects_list/styles.projects_list";
import ItemProjects from "@/app/components/projects_list/item_projects";

const ProjectsList = () => {
    return (
        <DivWrapperListProjectsSC>
            <ItemProjects/>
            <ItemProjects/>
            <ItemProjects/>
            <ItemProjects/>
        </DivWrapperListProjectsSC>
    );
};

export default ProjectsList;