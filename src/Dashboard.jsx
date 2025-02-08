
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { createTheme } from '@mui/material/styles';
import DescriptionIcon from '@mui/icons-material/Description';
import FolderIcon from '@mui/icons-material/Folder';
import { AppProvider } from '@toolpad/core/AppProvider';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';
import { useDemoRouter } from '@toolpad/core/internal';



const demoTheme = createTheme({
  cssVariables: {
    colorSchemeSelector: 'data-toolpad-color-scheme',
  },
  colorSchemes: { light: true, dark: true },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 600,
      lg: 1200,
      xl: 1536,
    },
  },
});

function DemoPageContent({ pathname }) {
  return (
    <Box
      sx={{
        py: 4,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
      }}
    >
      
      <Typography>
    
        Dashboard content for {pathname}</Typography>
    </Box>
  );
}

DemoPageContent.propTypes = {
  pathname: PropTypes.string.isRequired,
};

function DashboardLayoutNavigationNested(props) {
  const { window } = props;

  const router = useDemoRouter('/Student');

  // Remove this const when copying and pasting into your project.
  const demoWindow = window !== undefined ? window() : undefined;

  return (
    // preview-start
    <AppProvider
    navigation={[
      {
        segment: 'Student',
        title: 'Student',
        icon: <FolderIcon />,
        children: [
          { segment: 'Firstyear', title: 'FE', icon: <DescriptionIcon /> },
          { segment: 'Secondyear', title: 'SE', icon: <DescriptionIcon /> },
          { segment: 'Thirdyear ', title: 'TE', icon: <DescriptionIcon /> },
          { segment: 'Lastyear', title: 'BE', icon: <DescriptionIcon /> },
        ],
      },
      {
        segment: 'Notice/Circulaum',
        title: 'Notice/Circulaum',
        icon: <FolderIcon />,
        children: [
          { segment: 'Professor', title: 'Professor', icon: <DescriptionIcon /> },
          { segment: 'AssistantProfessor', title: 'Assistant Professor', icon: <DescriptionIcon /> },
          { segment: 'HOD', title: 'HOD', icon: <DescriptionIcon /> },
        ],
      },
      {
        segment: 'Syllubus',
        title: 'Syllubus',
        icon: <FolderIcon />,
        children: [
          { segment: 'Professor', title: 'Professor', icon: <DescriptionIcon /> },
          { segment: 'AssistantProfessor', title: 'Assistant Professor', icon: <DescriptionIcon /> },
          { segment: 'HOD', title: 'HOD', icon: <DescriptionIcon /> },
        ],
      },{
        segment: 'Acadamic Calender',
        title: 'Acadamic Calender',
        icon: <FolderIcon />,
        children: [
          { segment: 'Professor', title: 'Professor', icon: <DescriptionIcon /> },
          { segment: 'AssistantProfessor', title: 'Assistant Professor', icon: <DescriptionIcon /> },
          { segment: 'HOD', title: 'HOD', icon: <DescriptionIcon /> },
        ],
      },{
        segment: 'Time table-class',
        title: 'Time table-class',
        icon: <FolderIcon />,
        children: [
          { segment: 'Professor', title: 'Professor', icon: <DescriptionIcon /> },
          { segment: 'AssistantProfessor', title: 'Assistant Professor', icon: <DescriptionIcon /> },
          { segment: 'HOD', title: 'HOD', icon: <DescriptionIcon /> },
        ],
      },{
        segment: 'Activity plan',
        title: 'Activity plan',
        icon: <FolderIcon />,
        children: [
          { segment: 'Professor', title: 'Professor', icon: <DescriptionIcon /> },
          { segment: 'AssistantProfessor', title: 'Assistant Professor', icon: <DescriptionIcon /> },
          { segment: 'HOD', title: 'HOD', icon: <DescriptionIcon /> },
        ],
      },{
        segment: 'Study Material',
        title: 'Study Material',
        icon: <FolderIcon />,
        children: [
          { segment: 'Professor', title: 'Professor', icon: <DescriptionIcon /> },
          { segment: 'AssistantProfessor', title: 'Assistant Professor', icon: <DescriptionIcon /> },
          { segment: 'HOD', title: 'HOD', icon: <DescriptionIcon /> },
        ],
      },
      {
        segment: 'Student co-ordinate event',
        title: 'Student co-ordinate event',
        icon: <FolderIcon />,
        children: [
          { segment: 'Professor', title: 'Professor', icon: <DescriptionIcon /> },
          { segment: 'AssistantProfessor', title: 'Assistant Professor', icon: <DescriptionIcon /> },
          { segment: 'HOD', title: 'HOD', icon: <DescriptionIcon /> },
        ],
      },
      {
        segment: 'Photo Gallery',
        title: 'Photo Gallery',
        icon: <FolderIcon />,
        // children: [
        //   { segment: 'Professor', title: 'Professor', icon: <DescriptionIcon /> },
        //   { segment: 'AssistantProfessor', title: 'Assistant Professor', icon: <DescriptionIcon /> },
        //   { segment: 'HOD', title: 'HOD', icon: <DescriptionIcon /> },
        // ],
      },
      {
        segment: 'Magazine',
        title: 'Magazine',
        icon: <FolderIcon />,
        children: [
          { segment: 'Professor', title: 'Professor', icon: <DescriptionIcon /> },
          { segment: 'AssistantProfessor', title: 'Assistant Professor', icon: <DescriptionIcon /> },
          { segment: 'HOD', title: 'HOD', icon: <DescriptionIcon /> },
        ],
      },
    ]}
    router={router}
    theme={demoTheme}
    window={demoWindow}
  >
      <DashboardLayout >
        
        <DemoPageContent pathname={router.pathname} />
      </DashboardLayout>
    </AppProvider>
    // preview-end
  );
}




DashboardLayoutNavigationNested.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * Remove this when copying and pasting into your project.
   */
  window: PropTypes.func,
  
};

export default DashboardLayoutNavigationNested;

