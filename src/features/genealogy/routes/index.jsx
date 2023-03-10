import {Route, Routes, Outlet} from 'react-router-dom'
import {useIntl} from 'react-intl'
import {PageTitle} from '@/providers/PageDataProvider'
import {Genealogy} from './Genealogy'

const GenealogyRoutes = () => {
  const intl = useIntl()

  const genealogyBreadCrumbs = [
    {
      title: intl.formatMessage({id: 'GENEALOGY'}),
      path: '/genealogy',
      isSeparator: false,
      isActive: false,
    },
    {
      title: '',
      path: '',
      isSeparator: true,
      isActive: false,
    },
  ]

  return (
    <Routes>
      <Route
        path=''
        element={
          <>
            <PageTitle breadcrumbs={genealogyBreadCrumbs} description=''>
              {intl.formatMessage({id: 'GENEALOGY'})}
            </PageTitle>
            <Genealogy />
          </>
        }
      />
    </Routes>
  )
}

export default GenealogyRoutes
