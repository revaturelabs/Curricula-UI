

export const skillPillTypes = {
    SUCCESSFUL_GET_ALL: 'GET_ALL_SKILLS_SUCCESSFUL',
    UNSUCCESSFUL_GET_ALL: 'GET_ALL_SKILLS_UNSUCCESSFUL'
}

export const getAllSkills = () => async (dispatch: any) => {
    try {
        let res = await apiGetAllSkills()
        if (res.status === 200) {
            dispatch({
                type: skillPillTypes.SUCCESSFUL_GET_ALL,
                payload: {
                    allSkills: res.body
                }
            })
        } else {
            dispatch({
                type: skillPillTypes.UNSUCCESSFUL_GET_ALL
            })
        }
    } catch (e) {
        dispatch({
            type: skillPillTypes.UNSUCCESSFUL_GET_ALL
        })
    }
}