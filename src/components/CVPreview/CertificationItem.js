import React from 'react'
import styled from 'styled-components'
import Subsection from '../Utils/Subsection'

const CertificationItem = ({ certificationItem }) => {
    let link='';
    if(certificationItem.link!==''){
        link='credential';
    }
  return (
    <CertificationItemWrapper>
        <Subsection title={certificationItem.name}>
          <div>
            {certificationItem.source} | {certificationItem.date} | <a href={certificationItem.link}>{link}</a>
          </div>
        </Subsection>
    </CertificationItemWrapper>
  )
}

const CertificationItemWrapper = styled.div`
    
  display: flex;
`


export default CertificationItem
