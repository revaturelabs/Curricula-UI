import React from 'react'

export class SkillPillComponent extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            allSkills: []
        };
    }

    render() {
        return (
            <ul>
                {this.state.allSkills.map((s: Skill) => {
                    return <div>
                        <p>{s.skillName}</p>
                    </div>
                })}
            </ul>
        )
    }
}