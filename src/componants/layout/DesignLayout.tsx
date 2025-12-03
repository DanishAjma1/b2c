import React from 'react'
import { Outlet } from 'react-router-dom'
import { DesignPageNavbar } from '../navbar/DesignPageNavbar'
import { DesignPageFooter } from '../DesignPageFooter'

export const DesignLayout: React.FC = () => {
    return (
        <div>
            <DesignPageNavbar />
            <Outlet />
            <DesignPageFooter />
        </div>
    )
}
